import profile from "../assets/profile.svg";
import locationmarker from "../assets/locationmarker.png";
import styles from "../style";
import { useNavigate } from "react-router"

const ProfileCard = ({ name, desc, location, handleEditProfileModal }) => {

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-grey p-10 w-100">
      <div className="flex items-center justify-center">
        <img
          className="rounded-full border-2 border-grey"
          src={profile}
          alt="Profile"
        />
      </div>
      <div className="mt-8 text-center flex flex-col">
        <span className={`${styles.subheading2} text-black text-[28px]`}>{name}</span>
        <span className={`${styles.subheading7} text-black text-opacity-40 text-[14px] mt-0.5`}>{desc}</span>
        <div className="flex items-center justify-center">
          <img
            className="mr-2"
            src={locationmarker}
            alt="Location Marker"
          />
          <span className={`${styles.subheading7} text-black text-opacity-40 text-[14px] mt-0.5`}>{location || "No location set yet"}</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center">
        <button onClick={handleEditProfileModal} className={`${styles.subheading6} text-[16px] bg-blue hover:bg-blue-accent text-black text-center py-2 px-4 rounded-3xl border-black border-[1px]`}>
          Edit Profile
        </button>
        <button 
          onClick={logOut}
          className={`${styles.subheading6} text-[16px] bg-yellow hover:bg-yellow-accent text-black text-center font-bold py-2 px-4 rounded-3xl mt-3 border-black border-[1px]`}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
