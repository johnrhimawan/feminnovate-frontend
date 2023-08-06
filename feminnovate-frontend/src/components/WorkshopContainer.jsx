import styles from "../style";
import { useNavigate } from 'react-router-dom'
import stripe from '../assets/stripe.svg'
import calendar from '../assets/calendar.png'
import location from '../assets/location-marker-2.png'

const WorkshopContainer = () => {

    const navigate = useNavigate();

    const redirectToJobDetails = () => {
        navigate(`/jobs/3`);
    }

    return (
        <div 
            className="w-[100%] flex items-center justify-center 
                border-2 border-grey rounded-2xl cursor-pointer 
                py-20 flex-col
                hover:bg-grey hover:bg-opacity-30 bg-blue bg-opacity-25" 
            onClick={redirectToJobDetails}>
            <img src={stripe}/>
            <span className={`${styles.subheading2} mt-4 text-center`}>Computer Security Workshop</span>
            <div className="flex flex-row items-center mt-2">
                <img src={calendar} className="mr-1.5"/>
                <span>Thursday, 25 April 2023</span>
            </div>
            <div className="flex flex-row items-center mt-2">
                <img src={location} className="mr-1.5"/>
                <span>Online</span>
            </div>
        </div>
    )
}

export default WorkshopContainer;