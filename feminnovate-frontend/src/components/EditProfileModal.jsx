import { useState } from 'react';
import { CloseButton, Input } from './AuthenticationModal';
import styles from '../style';
import axios from 'axios';
import { API_URL } from '../constants';
import { useNavigate } from 'react-router';

const EditProfileModal = ( { handleClose, prevName, prevDesc, prevLocation } ) => {

    const [name, setName] = useState(prevName);
    const [location, setLocation] = useState(prevLocation);
    const [desc, setDesc] = useState(prevDesc);
    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDescription = (event) => {
        setDesc(event.target.value);
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const saveProfile = () => {
        axios.put(`${API_URL}api/user/${username}/`, {
            name: name,
            location: location,
            description: desc,
            email: "",
            picture: "",
            password: ""
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

   return (
    <div className="flex fixed inset-0 h-full w-full justify-center items-center z-20">
      <div
        className="flex fixed inset-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-sm z-20"
        onClick={handleClose}/>

      <div className="w-1/4 h-auto z-20">
        <div className="flex flex-col w-full h-full bg-white rounded-3xl p-10 items-center justify-around">
          <div className="flex w-full h-full">
            <CloseButton onClick={handleClose}></CloseButton>
          </div>

          <div>
            <Input 
                label="Name"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleNameChange}/>
            <Input 
                label="Description"
                id="description"
                name="description"
                type="text"
                value={desc}
                onChange={handleDescription}/>
            <Input 
                label="Location"
                id="location"
                name="location"
                type="text"
                value={location}
                onChange={handleLocation}/>  
            
            <div className="flex flex-col mt-4">
                <button onClick={saveProfile} className={`${styles.subheading6} w-100 bg-pink rounded-3xl py-2 border-black border-[1px] hover:bg-pink-accent`}>
                    Save
                </button>
                <button onClick={handleClose} className={`${styles.subheading6} w-100 border-black text-black border-[1px] rounded-3xl py-2 mt-2 hover:bg-grey`}>
                    Cancel
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
