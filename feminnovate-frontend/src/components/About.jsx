import React, { useState, useEffect } from "react";
import FeatureCards from "./FeatureCards";
import google_slides from "../assets/google-slides.png";
import github from "../assets/github.png"
import { useNavigate } from "react-router-dom";

const About = () => {
    let navigate = useNavigate();
    const redirect = (path) => {
       return () => { window.location.href = path; };
    }
    return (
        <div className="items-center w-full max-w-[1280px] mx-auto pb-20" id="about">
            <div className="font-extrabold text-[44px] pt-12 pb-12 text-center">
                About Feminnovate
            </div>
            <div className="flex flex-col gap-12 text-[20px] font-medium text-center w-4/5 mx-auto">
                <p>
                    FemInnovate is a website that enables women to pursue or
                    advance their careers in STEM by providing them a platform
                    to look for job openings/events and obtain mentorship.
                </p>
                <p>Feminnovate offers the following features</p>
                <FeatureCards />
                <p>
                    FemInnovate is submitted as part of{" "}
                    <a
                        href="https://www.sustainathon.tcsapps.com/events/ongoing/SG2023"
                        target="_blank"
                        className=" transition text-blue hover:font-semibold hover:underline"
                    >
                        TCS Sustainathon 2023.
                    </a>
                </p>
                <div className="grid md:grid-cols-2 lg:w-2/3 sm:w-4/5 mx-auto justify-center gap-10">
                    <button className="flex py-5 px-10 text-left gap-6 rounded-xl bg-white shadow-xl border border-grey" onClick={redirect("https://docs.google.com/presentation/d/1naM9IxbFvQpfovoWmm7M8Eu3eDFiKmz4mSZYG-fc0BE/edit?usp=sharing")}>
                        <img src={google_slides} className="w-10" />
                        <span className="my-auto">View Proposal on Google Slides</span>
                    </button>
                    
                    <button className="flex py-5 px-8 text-left gap-6 rounded-xl bg-white shadow-xl border border-grey" onClick={redirect("https://github.com/johnrhimawan/feminnovate-frontend")}>
                        <img src={github} className="w-14" />
                        <span className="my-auto">View Source Code on GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
