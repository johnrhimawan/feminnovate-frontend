import Navbar from "../components/Navbar";
import styles from "../style";
import back from "../assets/back.png";
import calendar from "../assets/calendar.png";
import location from "../assets/location-marker-2.png";
import redirect from "../assets/redirect.png";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";
import { useEffect, useState } from "react";
import { parseDate } from "../components/WorkshopContainer";

const WorkshopDetailsPage = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [loaded, setLoaded] = useState(false);
  const [workshopDetails, setWorkshopDetails] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const fetchWorkshopDetails = () => {
    axios
      .get(`${API_URL}api/workshop/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/JSON",
        },
      })
      .then((response) => {
        setWorkshopDetails(response.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchSaved = async () => {
    const username = localStorage.getItem("username");
    axios
      .get(`${API_URL}api/user/${username}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        res.data.saved_workshops.filter((workshop_id) => {
          return workshop_id === id;
        }).length > 0
          ? setIsSaved(true)
          : setIsSaved(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveWorkshop = () => {
    axios
      .post(
        `${API_URL}api/save/workshop/`,
        {
          workshop_id: id,
          save: !isSaved,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        setIsSaved(!isSaved);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSaved();
    fetchWorkshopDetails();
  }, []);

  if (loaded)
    return (
      <>
        <Navbar />
        <div className="w-[100%] px-20 mt-2 mb-10">
          <div
            className="flex items-center mb-8 cursor-pointer"
            onClick={goBack}
          >
            <img src={back} className="w-4" />
            <p
              className={`${styles.subheading4} text-black text-opacity-40 ml-2 hover:text-opacity-60`}
            >
              Back
            </p>
          </div>

          <div className="w-[7.5%]">
            <img
              src={workshopDetails && workshopDetails.organizer.picture}
              className="w-[100%]"
            />
          </div>
          <div className="mt-8">
            <a
              href={`${workshopDetails && workshopDetails.website}`}
              target="_blank"
              rel="noreferrer"
              className={`${styles.subheading2} underline text-hyperlink`}
            >
              {workshopDetails && workshopDetails.organizer.name}
            </a>
            <p className={`${styles.heading2} text-black my-2`}>
              {workshopDetails && workshopDetails.title}
            </p>
          </div>

          <div className="my-4">
            <div className="flex flex-row">
              <div className="w-[2%] h-auto flex justify-center items-center">
                <img src={calendar} className="" />
              </div>
              <span className={`${styles.subheading7} ml-1 text-black`}>
                {`${
                  workshopDetails && parseDate(workshopDetails.start_time)
                } - ${workshopDetails && parseDate(workshopDetails.end_time)}`}
              </span>
            </div>
            <div className="flex flex-row mt-1">
              <div className="w-[2%] h-auto flex justify-center items-center">
                <img src={location} />
              </div>
              <span className={`${styles.subheading7} ml-1 text-black`}>
                {workshopDetails && workshopDetails.location}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="flex items-center py-1 px-4 bg-purple bg-opacity-25 rounded-3xl border border-grey mr-2 hover:bg-opacity-50"
              onClick={() =>
                window.location.replace(
                  workshopDetails && workshopDetails.website
                )
              }
            >
              <span className="mr-2">Register</span>
              <img src={redirect} />
            </button>
            <button
              className="py-1 px-4 rounded-3xl border border-grey mr-2 hover:bg-opacity-25 hover:bg-black"
              onClick={saveWorkshop}
            >
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>

          <div className="mt-8">
            <div
              className={`w-[100%] bg-pink bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}
            >
              <p className={`${styles.subheading2} text-black mb-2`}>
                Description
              </p>
              <p
                className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}
              >
                {workshopDetails && workshopDetails.description}
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default WorkshopDetailsPage;
