import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import styles from "../style";
import axios from "axios";
import { API_URL } from "../constants";
import EditProfileModal from "../components/EditProfileModal";
import JobContainer from "../components/JobContainer";

const ProfilePage = () => {

  const [companiesSelected, setCompaniesSelected] = useState(false);
  const [workshopsSelected, setWorkshopsSelected] = useState(true);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('No description yet');
  const [location, setLocation] = useState('No location set yet');
  const [companies, setCompanies] = useState([]);
  const [workshops, setWorkshops] = useState([]);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
 
  const username = localStorage.getItem('username')
  const userToken = localStorage.getItem('token');


  const toggleCompaniesSelected = () =>{
    setCompaniesSelected(true);
    setWorkshopsSelected(false);
  }

  const toggleWorkshopsSelected = () => {
    setWorkshopsSelected(true);
    setCompaniesSelected(false);
  }

  const hideProfileModal = () => {
    setShowEditProfileModal(false)
  }
  
  const showProfileModal = () => {
    setShowEditProfileModal(true)
  }

  const getUserData = () => {
    axios.get(API_URL + `api/user/${username}/` ,{
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    }).then(response => {
      console.log(response.data)
      setName(response.data.name);
      let desc = response.data.description;
      if (desc !== "" || desc === null) {
        setDesc(response.data.description);
      }
      let location = response.data.location;
      if (location !== "" || location === null) {
        setLocation(response.data.location);
      }

      retrieveSavedJobs()
      retrieveSavedWorkshops()
      if (response.data.saved_jobs !== []) {
        
      }
      
      setWorkshops(response.data.saved_workshops);

    }).catch( err => {
      console.log(err);
    })
  }
  
  const retrieveSavedJobs = () => {
    axios.get(`${API_URL}api/user/${username}/saved_jobs/`, {
      headers: {
        "Authorization": `Bearer ${userToken}`,
      }
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  const retrieveSavedWorkshops = () => {
    axios.get(`${API_URL}api/user/${username}/saved_workshops/`, {
      headers: {
        "Authorization": `Bearer ${userToken}`,
      }
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <>
      {showEditProfileModal? <EditProfileModal handleClose={hideProfileModal} prevName={name} prevDesc={desc} prevLocation={location}/> : null}
      <Navbar />
      <div className="flex justify-center w-100 mt-10 mb-20 bg-white">
        <div className="flex items-start justify-center mr-10">
          <ProfileCard name={name} desc={desc} location={location} handleEditProfileModal={showProfileModal}/>
        </div>
        <div className="w-[65%] flex justify-start content-start flex-col">
          <div className="flex justify-between items-center">
            <span className={`${styles.heading2} text-black`}>Interests</span>
            <div className="border-grey border-[1px] rounded-3xl">
              <div className="p-1">
                <button 
                  onClick={toggleCompaniesSelected}
                  className={`${styles.subheading6} text-[16px] px-14 py-1 rounded-2xl ` + `${companiesSelected && !workshopsSelected? "bg-blue" : "bg-transparent"}`}>
                    Jobs
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
            {companiesSelected? (
              companies.map((job) => {
                return (
                  <JobContainer key={job}/>
                )
              }
            )) : null}
            {workshopsSelected? null: null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
