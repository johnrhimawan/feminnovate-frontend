import { useState } from "react";
import InterestCard from "../components/InterestCard";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import styles from "../style";

const ProfilePage = () => {

  const [companiesSelected, setCompaniesSelected] = useState(false);
  const [workshopsSelected, setWorkshopsSelected] = useState(true)

  const toggleCompaniesSelected = () =>{
    setCompaniesSelected(true);
    setWorkshopsSelected(false);
  }

  const toggleWorkshopsSelected = () => {
    setWorkshopsSelected(true);
    setCompaniesSelected(false);
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center w-100 mt-10 mb-20 bg-white">
        <div className="flex items-start justify-center mr-10">
          <ProfileCard />
        </div>
        <div className="w-[65%] flex justify-start content-start flex-col">
          <div className="flex justify-between items-center">
            <span className={`${styles.heading2} text-black`}>Interests</span>
            <div className="border-grey border-[1px] rounded-3xl">
              <div className="p-1">
                <button 
                  onClick={toggleCompaniesSelected}
                  className={`${styles.subheading6} text-[16px] px-9 py-1 rounded-2xl ` + `${companiesSelected && !workshopsSelected? "bg-blue" : "bg-transparent"}`}>
                    Companies
                </button>
                <button 
                  onClick={toggleWorkshopsSelected}
                  className={`${styles.subheading6} text-[16px] px-9 py-1 rounded-2xl ` + `${!companiesSelected && workshopsSelected? "bg-blue" : "bg-transparent"}`}>
                    Workshops
                </button>
              </div>
            </div>
          </div>
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
