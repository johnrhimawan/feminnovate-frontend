import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import WorkshopContainer from "../components/WorkshopContainer";
import WorkshopSidebar from "../components/WorkshopSidebar";
import styles from "../style";
import axios from "axios";
import { API_URL } from "../constants";

const WorkshopListingPage = () => {

    const [workshops, setWorkshops] = useState([]);

    const fetchWorkshops = () => {
        axios
            .get(`${API_URL}api/workshop/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }).then((res) => {
                setWorkshops(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {  
        fetchWorkshops();
    }, []);

    return (
        <>
            <Navbar/>
            <div className="flex w-[100%] my-10 px-10 bg-white">
                <div className="w-[20%]">
                    <WorkshopSidebar />
                </div>
                <div className="w-[80%] flex justify-start content-start flex-col">
                    <span className={`${styles.heading2} text-black`}>
                        Events / Workshops
                    </span>
                    <div className="grid lg:grid-cols-3 w-[100%] gap-5 mt-8 md:grid-cols-2 xs:grid-cols-1">
                        {workshops.map((workshop) => (<WorkshopContainer data={workshop} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkshopListingPage;