import Navbar from "../components/Navbar";
import WorkshopContainer from "../components/WorkshopContainer";
import WorkshopSidebar from "../components/WorkshopSidebar";
import styles from "../style";
import { API_URL } from '../constants';
import axios from "axios"
import { useEffect, useState } from "react"

const WorkshopListingPage = () => {

    const [workshops, setWorkshops] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const token = localStorage.getItem('token');

    const fetchWorkshops = () => {
        axios.get(`${API_URL}api/workshop/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data)
            setWorkshops(response.data)
            setIsLoaded(true)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchWorkshops()
    }, [])

    if (isLoaded) return (
        <>
            <Navbar/>
            <div className="flex w-[100%] my-10 px-10 bg-white">
                <div className="w-[20%]">
                    <WorkshopSidebar />
                </div>
                <div className="w-[80%] flex justify-start content-start flex-col">
                    <span className={`${styles.heading2} text-black`}>
                        Events / Workshops
                    </span>
                    <div className="grid lg:grid-cols-3 w-[100%] gap-5 mt-8 md:grid-cols-2 xs:grid-cols-1">
                        {workshops.map(workshop => (
                            <WorkshopContainer data={workshop} key={workshop.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkshopListingPage;