import React, { useState, useEffect } from "react";
import JobContainer from "../components/JobContainer";
import JobSidebar from "../components/JobSidebar";
import Navbar from "../components/Navbar";
import styles from "../style";
import axios from "axios";

import { API_URL } from "../constants";

const JobListingPage = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = () => {
        axios
            .get(`${API_URL}api/job/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            .then((res) => {
                setJobs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex w-[100%] my-10 px-10 bg-white">
                <div className="w-[20%]">
                    <JobSidebar />
                </div>
                <div className="w-[80%] flex justify-start content-start flex-col">
                    <span className={`${styles.heading2} text-black`}>
                        Jobs
                    </span>
                    <div className="grid lg:grid-cols-3 w-[100%] gap-5 mt-8 md:grid-cols-2 xs:grid-cols-1">
                        {jobs.map((job) => (<JobContainer data={job} />))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobListingPage;
