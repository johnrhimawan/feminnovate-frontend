import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import styles from '../style';
import axios from 'axios';
import { API_URL } from '../constants';
import EditProfileModal from '../components/EditProfileModal';
import JobContainer from '../components/JobContainer';
import no_data from '../assets/no-data.svg';
import WorkshopContainer from '../components/WorkshopContainer';

const ProfilePage = () => {
  const [companiesSelected, setCompaniesSelected] = useState(false);
  const [workshopsSelected, setWorkshopsSelected] = useState(true);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('No description yet');
  const [location, setLocation] = useState('No location set yet');
  const [companies, setCompanies] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const username = localStorage.getItem('username');
  const userToken = localStorage.getItem('token');

  const toggleCompaniesSelected = () => {
    setCompaniesSelected(true);
    setWorkshopsSelected(false);
  };

  const toggleWorkshopsSelected = () => {
    setWorkshopsSelected(true);
    setCompaniesSelected(false);
  };

  const hideProfileModal = () => {
    setShowEditProfileModal(false);
  };

  const showProfileModal = () => {
    setShowEditProfileModal(true);
  };

  const getUserData = () => {
    axios
      .get(API_URL + `api/user/${username}/`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        let desc = response.data.description;
        if (desc !== '' || desc === null) {
          setDesc(response.data.description);
        }
        let location = response.data.location;
        if (location !== '' || location === null) {
          setLocation(response.data.location);
        }

        if (response.data.saved_jobs.length !== 0) {
          retrieveSavedJobs();
        }

        if (response.data.saved_workshops.length !== 0) {
          retrieveSavedWorkshops();
        }

        setIsLoaded(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retrieveSavedJobs = () => {
    axios
      .get(`${API_URL}api/user/${username}/saved_jobs/`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retrieveSavedWorkshops = () => {
    axios
      .get(`${API_URL}api/user/${username}/saved_workshops/`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setWorkshops(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const NoDataDiv = ({ mode }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <img src={no_data} className="w-64 mt-20 mb-10" />
        <div
          className={`${styles.subheading2} mb-1`}>{`No ${mode} saved yet`}</div>
        <div className={`${styles.subheading4} mb-5 text-black/50`}>
          {`Your saved ${mode} will appear here.`}{' '}
        </div>
      </div>
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoaded) return (
    <>
      {showEditProfileModal ? (
        <EditProfileModal
          handleClose={hideProfileModal}
          prevName={name}
          prevDesc={desc}
          prevLocation={location}
        />
      ) : null}
      <Navbar />
      <div className="flex justify-center w-100 mt-10 mb-20 bg-white">
        <div className="flex items-start justify-center mr-10">
          <ProfileCard
            name={name}
            desc={desc}
            location={location}
            handleEditProfileModal={showProfileModal}
          />
        </div>
        <div className="w-[65%] flex justify-start content-start flex-col">
          <div className="flex justify-between items-center">
            <span className={`${styles.heading2} text-black`}>Interests</span>
            <div className="border-grey border-[1px] rounded-3xl">
              <div className="p-1">
                <button
                  onClick={toggleCompaniesSelected}
                  className={
                    `${styles.subheading6} text-[16px] px-14 py-1 rounded-2xl ` +
                    `${
                      companiesSelected && !workshopsSelected
                        ? 'bg-blue'
                        : 'bg-transparent'
                    }`
                  }>
                  Jobs
                </button>
                <button
                  onClick={toggleWorkshopsSelected}
                  className={
                    `${styles.subheading6} text-[16px] px-9 py-1 rounded-2xl ` +
                    `${
                      !companiesSelected && workshopsSelected
                        ? 'bg-blue'
                        : 'bg-transparent'
                    }`
                  }>
                  Workshops
                </button>
              </div>
            </div>
          </div>
          {companies.length === 0 && companiesSelected ? (
            <NoDataDiv mode="jobs"/>
          ) : null}

          {workshops.length === 0 && workshopsSelected ? (
            <NoDataDiv mode="workshops"/>
          ) : null}

          <div className="grid lg:grid-cols-3 w-[100%] gap-5 mt-8 md:grid-cols-2 xs:grid-cols-1">
            {companiesSelected && companies.length > 0
              ? companies.map((job) => {
                  return <JobContainer data={job} key={job} />;
                })
              : null}
            {workshopsSelected && workshops.length > 0
              ? workshops.map((workshop) => {
                  return <WorkshopContainer data={workshop} key={workshop.id} />;
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
