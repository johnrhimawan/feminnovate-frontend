import InterestCard from "../components/InterestCard";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import styles from "../style";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center w-100 mt-10 mb-20 bg-white">
        <div className="flex items-start justify-center mr-10">
          <ProfileCard />
        </div>
        <div className="w-[65%] flex justify-start content-start flex-col">
          <span className={`${styles.heading2} text-black`}>Interests</span>
          <div className="grid grid-cols-3 w-[100%] gap-5 mt-8">
            <InterestCard />
            <InterestCard />
            <InterestCard />
            <InterestCard />
            <InterestCard />
            <InterestCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
