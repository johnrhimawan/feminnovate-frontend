import profile from "../assets/profile.svg";
import locationmarker from "../assets/locationmarker.png";
import styles from "../style";

const ProfileCard = () => {
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
        <span className={`${styles.subheading2} text-black text-[28px]`}>Karina</span>
        <span className={`${styles.subheading7} text-black text-opacity-40 text-[14px] mt-0.5`}>English Teacher</span>
        <div className="flex items-center justify-center">
          <img
            className="mr-2"
            src={locationmarker}
            alt="Location Marker"
          />
          <span className={`${styles.subheading7} text-black text-opacity-40 text-[14px] mt-0.5`}>Random School, Japan</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center">
        <button className={`${styles.subheading6} text-[16px] bg-blue hover:bg-blue-accent text-black text-center py-2 px-4 rounded-3xl border-black border-[1px]`}>
          Edit Profile
        </button>
        <button className={`${styles.subheading6} text-[16px] bg-yellow hover:bg-yellow-accent text-black text-center font-bold py-2 px-4 rounded-3xl mt-3 border-black border-[1px]`}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
