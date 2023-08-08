import React, { useState, useEffect } from "react";
import FeatureCards from "./FeatureCards"

const About = () => {
    return (
        <div className="items-center w-full max-w-[1280px] mx-auto pb-20">
            <div className="font-extrabold text-[44px] pt-12 pb-12 text-center">
                About Feminnovate
            </div>
            <div className="flex flex-col gap-12 text-[20px] font-medium text-center w-4/5 mx-auto">
                <p>
                    FemInnovate is a website that enables women to pursue or
                    advance their careers in STEM by providing them a platform
                    to look for job openings/events and obtain mentorship.
                </p>
                <p>
                    Feminnovate offers the following features
                </p>
                <FeatureCards />
                <p>
                    FemInnovate is submitted as part of TCS Sustainathon 2023.
                </p>
                <p>
                    View the full code here!
                </p>
            </div>
        </div>
    );
};

export default About;
