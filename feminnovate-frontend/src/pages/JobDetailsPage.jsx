import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import tcs from "../assets/tcs.png";
import styles from "../style";
import briefcase from "../assets/briefcase.png";
import cash from "../assets/cash.png";
import location from "../assets/map-marker.png";
import clock from "../assets/clock.png";
import redirect from "../assets/redirect.png";
import back from "../assets/back.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";
import { parseLastModified } from "../utils";

const JobDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loaded, setLoaded] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        axios
            .get(`${API_URL}api/job/${id}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setDetails(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchSaved = async () => {
        const username = localStorage.getItem("username");
        axios
            .get(`${API_URL}api/user/${username}/saved_jobs/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                res.data.filter((job_id) => job_id === id).length > 0
                    ? setIsSaved(true)
                    : setIsSaved(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addSaved = () => {
        axios.post(`${API_URL}api/save/job/`, {
            job_id: id,
            save: !isSaved,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            setIsSaved(!isSaved);
        }).catch((err) => {
            console.log(err);
        });
    };

    const goBack = () => {
        navigate("/jobs");
    };

    useEffect(() => {
        fetchDetails();
        fetchSaved();
    }, []);

    if (loaded) {
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
                            src={details.company.picture}
                            className="w-[100%]"
                        />
                    </div>
                    <div className="mt-8">
                        <a href={details.company.website} target="_blank">
                            <p
                                className={`${styles.subheading2} underline text-hyperlink`}
                            >
                                {details.company.name}
                            </p>
                        </a>
                        <p className={`${styles.heading2} text-black my-2`}>
                            {details.title}
                        </p>
                    </div>

                    <div className="my-4">
                        <div className="flex flex-row">
                            <div className="w-[2%] flex justify-start">
                                <img src={briefcase} className="" />
                            </div>
                            <span
                                className={`${styles.subheading7} ml-1 text-black`}
                            >
                                {details.job_type}
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[2%] flex justify-start">
                                <img src={location} />
                            </div>
                            <span
                                className={`${styles.subheading7} ml-1 text-black`}
                            >
                                {details.location}
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[2%] flex justify-start">
                                <img src={cash} />
                            </div>
                            <span
                                className={`${styles.subheading7} ml-1 text-black`}
                            >
                                {details.salary
                                    ? "$" + details.salary + "/mo"
                                    : "Company prefers to disclose"}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="rounded-3xl border-grey border flex items-center py-1 px-3">
                            <img src={clock} className="w-6 h-6" />
                            <span
                                className={`${styles.subheading7} text-dark-grey ml-1`}
                            >
                                {parseLastModified(details.updated_at)}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <button className="flex items-center py-1 px-4 bg-purple bg-opacity-25 rounded-3xl border border-grey mr-2 hover:bg-opacity-50">
                                <a
                                    href={details.company.website}
                                    target="_blank"
                                >
                                    <span className="mr-2">Apply</span>
                                </a>
                                <img src={redirect} />
                            </button>
                            <button className="py-1 px-4 rounded-3xl border border-grey mr-2 hover:bg-opacity-25 hover:bg-black" onClick={addSaved}>
                                {isSaved ? "Saved" : "Save"}
                            </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div
                            className={`w-[100%] bg-pink bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}
                        >
                            <p
                                className={`${styles.subheading2} text-black mb-2`}
                            >
                                Description
                            </p>
                            <p
                                className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}
                            >
                                {details.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div
                            className={`w-[100%] bg-yellow bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}
                        >
                            <p
                                className={`${styles.subheading2} text-black mb-2`}
                            >
                                Responsibilities
                            </p>
                            <p
                                className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}
                            >
                                {details.responsibilities}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div
                            className={`w-[100%] bg-blue bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}
                        >
                            <p
                                className={`${styles.subheading2} text-black mb-2`}
                            >
                                Qualifications
                            </p>
                            <p
                                className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}
                            >
                                {details.qualifications}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default JobDetailsPage;
