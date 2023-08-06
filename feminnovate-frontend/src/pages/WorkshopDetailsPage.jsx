import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import styles from "../style"
import back from "../assets/back.png"
import stripe from "../assets/stripe.svg"
import calendar from "../assets/calendar.png"
import location from "../assets/location-marker-2.png"
import redirect from "../assets/redirect.png"
import axios from "axios"
import { API_URL } from "../constants"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"

const WorkshopDetailsPage = (props) => {

    const templateDesc = "Join our Basic Programming Workshop and dive into the exciting world of coding! This beginner-friendly workshop is designed for individuals with little to no prior programming experience. Discover the fundamentals of programming through hands-on exercises and interactive learning. Learn to think like a programmer, write your first lines of code, and gain the skills needed to start your coding journey. No programming knowledge required – just bring your enthusiasm and curiosity!"
    const [details, setDetails] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();
 
    const goBack = () => {
        navigate('/events');
    }

    const fetchDetails = async () => {
        axios
            .get(`${API_URL}api/workshop/${id}/`, {
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

    useEffect(() => {
        fetchDetails();
    }, []);

    if (loaded) {
        return (
            <>
            <Navbar/>
            <div className="w-[100%] px-20 mt-2 mb-10">
                <div className="flex items-center mb-8 cursor-pointer" onClick={goBack}>
                    <img src={back} className="w-4"/>
                    <p className={`${styles.subheading4} text-black text-opacity-40 ml-2 hover:text-opacity-60`}>Back</p>
                </div>

                <div className="w-[7.5%]">
                    <img src={details.organizer.picture} className="w-[100%]"/>
                </div>
                <div className="mt-8">
                    <a href={details.organizer.website} target="_blank">
                        <p className={`${styles.subheading2} underline text-hyperlink`}>{details.organizer.name}</p>
                    </a>
                    <p className={`${styles.heading2} text-black my-2`}>{details.title}</p>
                </div>

                <div className="my-4">
                    <div className="flex flex-row">
                        <div className="w-[2%] flex justify-start">
                            <img src={calendar} className=""/>
                        </div>
                        <span className={`${styles.subheading7} ml-1 text-black`}>{details.start_time}</span>
                    </div>
                    <div className="flex flex-row mt-1">
                        <div className="w-[2%] flex justify-start">
                            <img src={location}/>
                        </div>
                        <span className={`${styles.subheading7} ml-1 text-black`}>{details.location}</span>
                    </div>
                </div>

            
                <div className="flex items-center">
                    <button className="flex items-center py-1 px-4 bg-purple bg-opacity-25 rounded-3xl border border-grey mr-2 hover:bg-opacity-50">
                        <span className="mr-2">Register</span>
                        <img src={redirect}/>
                    </button>
                    <button className="py-1 px-4 rounded-3xl border border-grey mr-2 hover:bg-opacity-25 hover:bg-black">Save</button>
                </div>

                <div className="mt-8">
                    <div className={`w-[100%] bg-pink bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}>
                        <p className={`${styles.subheading2} text-black mb-2`}>Description</p>
                        <p className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}>{details.description}</p>
                    </div>
                </div>
            </div>
        </>
    )}
}

export default WorkshopDetailsPage