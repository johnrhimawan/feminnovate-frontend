import styles from "../style";
import { useNavigate } from 'react-router-dom'
import calendar from '../assets/calendar.png'
import location from '../assets/location-marker-2.png'
import dayjs from "dayjs";

export const parseDate = ( date ) => {
    return dayjs(date).format('ddd, D MMM YYYY').toString()
}

const WorkshopContainer = ( props ) => {

    const navigate = useNavigate();

    const redirectToWorkshopDetails = () => {
        navigate(`/events/${props.data.id}`);
    }

    
    return (
        <div 
            className="w-[100%] flex items-center justify-center 
                border-2 border-grey rounded-2xl cursor-pointer 
                py-20 flex-col
                hover:bg-grey hover:bg-opacity-30 bg-blue bg-opacity-25" 
            onClick={redirectToWorkshopDetails}>
            <img src={props.data.organizer.picture} className="w-36 h-auto"/>
            <span className={`${styles.subheading2} mt-4 text-center`}>{props.data.title}</span>
            <div className="flex flex-row items-center mt-2">
                <img src={calendar} className="mr-1.5"/>
                <span className={`${styles.subheading5} text-[16px]`}>{parseDate(props.data.start_time)} - {parseDate(props.data.end_time)}</span>
            </div>
            <div className="flex flex-row items-center mt-2">
                <img src={location} className="mr-1.5"/>
                <span className={`${styles.subheading5} text-[16px]`}>{props.data.location}</span>
            </div>
        </div>
    )
}

export default WorkshopContainer;