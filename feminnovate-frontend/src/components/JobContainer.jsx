import styles from "../style";
import tcs from '../assets/tcs.png'
import briefcase from '../assets/briefcase.png'
import cash from '../assets/cash.png'
import location from '../assets/map-marker.png'
import clock from '../assets/clock.png'
import { useNavigate } from 'react-router-dom'
import { parseLastModified } from "../utils";

const JobContainer = (props) => {

    const navigate = useNavigate();
    const templateText = "We are seeking a skilled and dynamic Full Stack Developer to join our team. As a Full Stack Developer, you will be responsible for designing, developing, and implementing web applications that encompass both the front-end and back-end components. You will work closely with cross-functional teams, including designers, product managers, and software engineers, to create innovative and user-friendly digital solutions."

    /**
     * Cuts off a paragraph with more than 150 characters and adds an ellipsis
     * to the end of the paragraph.
     * 
     * @param {*} paragraph The Job Description 
     * @returns 
     */
    const summarizeAndAddEllipsis= (paragraph) => {
        const maxChars = 150;

        if (paragraph.length > maxChars) {
            const shortenedParagraph = paragraph.substring(0, maxChars) + "...";
            return shortenedParagraph;
        }

        return paragraph
    }

    const redirectToJobDetails = () => {
        navigate(`/jobs/${props.data.id}`);
    }

    return (
        <div className="w-[100%] border-2 border-grey rounded-2xl cursor-pointer hover:bg-grey hover:bg-opacity-30" onClick={redirectToJobDetails}>
            <div className="p-2">
                <div className="h-[70%] rounded-t-2xl bg-pink bg-opacity-25 p-4">
                    <div className="flex w-[100%] flex-row">
                        <div className="w-[75%]">
                            <p className={`${styles.subheading2} text-black leading-8`}>{props.data.title}</p>
                        </div>
                        <div className="w-[25%]">
                            <img src={props.data.company.picture} className="float-right relative mt-2 mr-2 w-[75%]"/>
                        </div>
                    </div>
                    <p className={`${styles.subheading6} underline text-hyperlink mt-2`}>{props.data.company.name}</p>

                    <div className="mt-5">
                        <div className="flex flex-row">
                            <img src={briefcase}/>
                            <span className={`${styles.subheading5} ml-1 text-black`}>{props.data.job_type}</span>
                        </div>
                        <div className="flex flex-row">
                            <img src={location}/>
                            <span className={`${styles.subheading5} ml-1 text-black`}>{props.data.location}</span>
                        </div>
                        <div className="flex flex-row">
                            <img src={cash}/>
                            <span className={`${styles.subheading5} ml-1 text-black`}>{props.data.salary ? "$" + props.data.salary + "/mo" : "Undisclosed"}</span>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-between">
                        <div className="bg-white rounded-3xl py-0.5 px-2.5 flex flex-row items-center">
                            <img src={clock} className="w-[20px] h-[20px]"/>
                            <span className={`${styles.subheading6} text-dark-grey ml-1`}>{parseLastModified(props.data.updated_at)}</span>
                        </div>
                        {/* <div className="bg-white rounded-3xl px-5 py-0.5 items-center justify-center">
                            <button className={`${styles.subheading6} z-20 text-black ml-1`} onClick={() => console.log("hello")}>Save</button>
                        </div> */}
                    </div>
                </div>

                <div className="m-5">
                    <p className={`${styles.subheading3} text-black`}>Description</p>
                    <p className={`${styles.subheading5}} leading-5 mt-2.5 text-black text-justify`}>{summarizeAndAddEllipsis(props.data.description)}</p>
                </div>
            </div>
        </div>
    )
}

export default JobContainer;