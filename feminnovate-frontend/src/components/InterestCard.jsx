import React from "react";
import stripe from "../assets/stripe.svg";

const InterestCard = () => {
  return (
    <div className="w-full border-2 border-grey rounded-2xl flex flex-col items-center p-4 bg-indigo-200">
      <img src={stripe} className="mx-auto" alt="TCS" />
      <h1 className="text-2xl font-bold mt-4">Stripe Accountancy</h1>
      <p className="text-gray-300 text-sm mt-2">Stripe</p>
    </div>
  );
};

export default InterestCard;
