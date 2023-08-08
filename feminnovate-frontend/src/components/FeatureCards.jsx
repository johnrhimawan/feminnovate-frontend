import React, { useState, useEffect } from "react";
import landing_img from "../assets/landing-img.png";

const data = [
    {
        image: landing_img,
        text: "Job opportunities posting",
    },
    {
        image: landing_img,
        text: "Events posting for women in tech",
    },
    {
        image: landing_img,
        text: "Opportunities forum for women in STEM",
    },
];

const FeatureCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.map((item) => (
                <Card data={item} />
            ))}
        </div>
    );
};

const Card = (props) => {
    return (
        <div className="transition-all flex flex-col gap-6 border-2 border-blue p-10 rounded-2xl hover:bg-blue hover:scale-[102.5%] hover:opacity-80">
            <img src={props.data.image} />
            <span>{props.data.text}</span>
        </div>
    );
};
export default FeatureCards;
