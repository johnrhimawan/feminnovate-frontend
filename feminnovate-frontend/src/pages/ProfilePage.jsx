import InterestCard from "../components/InterestCard";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import styles from "../style";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-[100%] my-10 px-10 bg-white">
        <div className="w-[30%] flex items-center justify-center">
          <ProfileCard />
        </div>
        <div className="w-[70%] flex justify-start content-start flex-col">
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
