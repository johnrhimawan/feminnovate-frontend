import React from "react";
import profile from "../assets/profile.svg";
import locationmarker from "../assets/locationmarker.svg";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg border-2 border-grey p-6">
      <div className="flex items-center justify-center">
        <img
          className="w-50 h-50 rounded-full object-cover border-2 border-grey"
          src={profile}
          alt="Profile"
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-2xl font-bold">Karina</h1>
        <p className="text-gray-300 text-sm">English Teacher</p>
        <div className="flex items-center justify-center mt-2">
          <img
            className="w-4 h-4 mr-1"
            src={locationmarker}
            alt="Location Marker"
          />
          <p className="text-gray-300 text-sm">Random School, Japan</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-black text-center font-bold py-2 px-4 mr-4 rounded">
          Edit Profile
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-black text-center font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
