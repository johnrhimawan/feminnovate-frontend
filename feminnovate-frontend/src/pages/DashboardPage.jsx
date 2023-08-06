import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../style";
import axios from "axios";
import { API_URL } from "../constants.js";
import JobContainer from "../components/JobContainer";
import InterestCard from "../components/InterestCard";
import noData from "../assets/no-data.svg";
import moment from "moment";

const components = {
  JobContainer,
  InterestCard,
};

const InnerCard = ({ title, message, desc, itemValue, itemComponentName }) => {
  const ItemComponent = components[itemComponentName];
  return (
    <div className="flex flex-col w-[100%] h-[100%] p-6 rounded rounded-xl items-stretch shadow-xl bg-white">
      <div className={`${styles.subheading2} text-black mb-3`}>{title}</div>
      {itemValue.length > 0 ? (
        <div className="flex overflow-x-scroll hide-scroll-bar gap-5">
          {itemValue.map((item) => (
            <div className="flex-none w-[400px]">
              <ItemComponent id={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src={noData} className="w-64 my-10" />
          <div className={`${styles.subheading2} mb-1`}>{message}</div>
          <div className={`${styles.subheading4} mb-5 text-black/50`}>
            {desc}
          </div>
        </div>
      )}
    </div>
  );
};

const DashboardPage = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };

  const [name, setName] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [savedExperiences, setSavedExperiences] = useState([]);
  const [savedWorkshops, setSavedWorkshops] = useState([]);
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);
  const [companies, setCompanies] = useState([]);

  const getUser = async () => {
    console.log("hi");

    await axios
      .get(`${API_URL}api/user/${username}/`, { headers: headers })
      .then((resp) => {
        setName(resp.data.name);
        setSavedJobs(resp.data.saved_jobs);
        setSavedExperiences(resp.data.saved_experiences);
        setSavedWorkshops(resp.data.saved_workshops);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`${API_URL}api/workshop/`, { headers: headers })
      .then((resp) => {
        setUpcomingWorkshops(
          resp.data
            .filter((x) => {
              return x.start_time <= moment().format("YYYY-MM-DD");
            })
            .map((x) => x.id)
        );
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`${API_URL}api/company/`, { headers: headers })
      .then((resp) => {
        setCompanies(resp.data.map((x) => x.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, [username]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-24 pb-12 gap-10">
        <div className={`${styles.heading1} text-black`}>Hello, {name}!</div>
        <div className={`${styles.subheading3} text-black/50 -my-8`}>
          "Women have the power to revolutionize STEM fields and leave an
          indelible mark on the world." - Margaret Hamilton
        </div>
        <div className={`${styles.subheading3} text-black/50 -mb-9`}>
          Apply for your saved{" "}
          <span className={`${styles.subheading4} text-black`}>jobs</span> and{" "}
          <span className={`${styles.subheading4} text-black`}>workshops</span>{" "}
          now!
        </div>
        <div></div>
        <div className="flex flex-col overflow-hidden p-5 gap-5 bg-purple/25 justify-between rounded-xl">
          <InnerCard
            title="Saved jobs"
            message="No jobs saved yet"
            desc="Your saved jobs will appear here."
            itemValue={savedJobs}
            itemComponentName="JobContainer"
          ></InnerCard>
          <InnerCard
            title="Saved workshops"
            message="No workshops saved yet"
            desc="Your saved workshops will appear here."
            itemValue={savedWorkshops}
            itemComponentName="JobContainer"
          ></InnerCard>
        </div>
        <div className="flex flex-row overflow-hidden p-5 gap-5 bg-yellow/25 justify-between rounded-xl">
          <InnerCard
            title="Upcoming workshops"
            message="There are no upcoming workshops"
            desc="Upcoming workshops will appear here."
            itemValue={upcomingWorkshops}
            itemComponentName="JobContainer"
          ></InnerCard>
        </div>
        <div className="flex flex-row overflow-hidden p-5 gap-5 bg-blue/25 justify-between rounded-xl">
          <InnerCard
            title="Companies you might be interested in"
            message="No companies found"
            desc="Recommended companies will appear here."
            itemValue={companies}
            itemComponentName="InterestCard"
          ></InnerCard>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
