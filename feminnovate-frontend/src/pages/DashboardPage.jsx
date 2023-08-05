import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../style";
import axios from "axios";
import { API_URL } from "../constants.js";
import JobContainer from "../components/JobContainer";

const DashboardPage = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };

  const [name, setName] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [savedExperiences, setSavedExperiences] = useState([]);
  const [savedWorkshops, setSavedWorkshops] = useState([]);

  const getUser = async () => {
    console.log("hi");

    await axios
      .get(`${API_URL}api/user/${username}/`, { headers: headers })
      .then((resp) => {
        setName(resp.data.name);
        setSavedJobs(resp.data.saved_jobs);
        setSavedExperiences(resp.data.saved_experiences);
        setSavedWorkshops(resp.data.saved_workshops);
      });
  };

  useEffect(() => {
    getUser();
  }, [username]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-24 pb-12 gap-10">
        <div className={`${styles.heading1} text-black`}>Hello, {name}</div>
        <div className="flex flex-col overflow-hidden p-5 gap-5 bg-purple/25 justify-between rounded-xl">
          <div className="flex flex-col w-[100%] h-[100%] p-6 rounded rounded-xl items-stretch shadow-xl bg-white">
            <div className={`${styles.subheading2} text-black mb-3`}>
              Saved jobs
            </div>
            <div className="flex overflow-x-scroll hide-scroll-bar gap-5">
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-none w-[100%] h-[100%] p-6 rounded rounded-xl items-stretch shadow-xl bg-white">
            <div className={`${styles.subheading2} text-black mb-3`}>
              Saved workshops
            </div>
            <div className="flex overflow-x-scroll hide-scroll-bar gap-5">
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row overflow-hidden p-5 gap-5 bg-yellow/25 justify-between rounded-xl">
          <div className="flex flex-col w-[100%] h-[100%] p-6 rounded rounded-xl items-stretch shadow-xl bg-white">
            <div className={`${styles.subheading2} text-black mb-3`}>
              Upcoming workshops
            </div>
            <div className="flex overflow-x-scroll hide-scroll-bar gap-5">
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
              <div className="flex-none w-[400px]">
                <JobContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
