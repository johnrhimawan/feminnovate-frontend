import Navbar from "../components/Navbar";
import tcs from '../assets/tcs.png'
import styles from "../style";
import briefcase from '../assets/briefcase.png'
import cash from '../assets/cash.png'
import location from '../assets/map-marker.png'
import clock from '../assets/clock.png'
import redirect from '../assets/redirect.png'
import back from '../assets/back.png'
import { useNavigate } from 'react-router-dom';

const JobDetailsPage = () => {

    const navigate = useNavigate();

    const templateDesc = "We are seeking a skilled and dynamic Full Stack Developer to join our team. As a Full Stack Developer, you will be responsible for designing, developing, and implementing web applications that encompass both the front-end and back-end components. You will work closely with cross-functional teams, including designers, product managers, and software engineers, to create innovative and user-friendly digital solutions."

    const templateResponsibilities = '\u2022 ' + "Collaborate with the team to conceptualize, plan, and develop robust web applications with a focus on both front-end and back-end technologies.\n" +
            '\u2022 ' + "Design and implement intuitive and visually appealing user interfaces using modern web technologies such as HTML, CSS, and JavaScript frameworks (e.g., React, Angular, Vue.js).\n" + 
            '\u2022 ' + "Develop and maintain server-side components, APIs, and databases using appropriate programming languages (e.g., Python, Java, Node.js) and frameworks (e.g., Django, Spring, Express).\n" + 
            '\u2022 ' + "Design and optimize database structures, create efficient queries, and ensure data integrity."
    
    const templateQualifications = '\u2022 ' + "Bachelor's degree in Computer Science, Software Engineering, or a related field. Equivalent practical experience will also be considered.\n" +
            '\u2022 ' + "Proven experience working as a Full Stack Developer or in a similar role, with a strong portfolio demonstrating successful project deliveries.\n" + 
            '\u2022 ' + "Proficiency in front-end technologies (HTML, CSS, JavaScript, etc.) and modern frameworks (React, Angular, etc.). Strong understanding of back-end development using programming languages (Python, Java, etc.) and frameworks (Django, Spring, etc.). Familiarity with database management (SQL, NoSQL) and version control systems (Git).\n" + 
            '\u2022 ' + "Excellent problem-solving and analytical skills, with the ability to analyze complex technical challenges and propose effective solutions.\n"
            '\u2022 ' + "Strong team player with excellent communication and interpersonal skills. Ability to work collaboratively in a cross-functional environment.\n"
            '\u2022 ' + "Continuous Learning: Self-motivated and proactive in staying up-to-date with industry trends, best practices, and emerging technologies."
    
    const goBack = () => {
        navigate('/jobs');
    }

    return (
        <>
            <Navbar/>
            <div className="w-[100%] px-20 mt-2 mb-10">
                <div className="flex items-center mb-8 cursor-pointer" onClick={goBack}>
                    <img src={back} className="w-4"/>
                    <p className={`${styles.subheading4} text-black text-opacity-40 ml-2 hover:text-opacity-60`}>Back</p>
                </div>

                <div className="w-[7.5%]">
                    <img src={tcs} className="w-[100%]"/>
                </div>
                <div className="mt-8">
                    <p className={`${styles.subheading2} underline text-hyperlink`}>Tata Consultancy Services</p>
                    <p className={`${styles.heading2} text-black my-2`}>Full Stack Developer</p>
                </div>

                <div className="my-4">
                    <div className="flex flex-row">
                        <div className="w-[2%] flex justify-start">
                            <img src={briefcase} className=""/>
                        </div>
                        <span className={`${styles.subheading7} ml-1 text-black`}>Full-time</span>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[2%] flex justify-start">
                            <img src={location}/>
                        </div>
                        <span className={`${styles.subheading7} ml-1 text-black`}>Singapore</span>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[2%] flex justify-start">
                            <img src={cash}/>
                        </div>
                        <span className={`${styles.subheading7} ml-1 text-black`}>$6,000/mo</span>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="rounded-3xl border-grey border flex items-center py-1 px-3">
                        <img src={clock} className="w-6 h-6"/>
                        <span className={`${styles.subheading7} text-dark-grey ml-1`}>10 hrs ago</span>
                    </div>
                    <div className="flex items-center">
                        <button className="flex items-center py-1 px-4 bg-purple bg-opacity-25 rounded-3xl border border-grey mr-2 hover:bg-opacity-50">
                            <span className="mr-2">Apply</span>
                            <img src={redirect}/>
                        </button>
                        <button className="py-1 px-4 rounded-3xl border border-grey mr-2 hover:bg-opacity-25 hover:bg-black">Save</button>
                    </div>
                </div>

                <div className="mt-8">
                    <div className={`w-[100%] bg-pink bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}>
                        <p className={`${styles.subheading2} text-black mb-2`}>Description</p>
                        <p className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}>{templateDesc}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <div className={`w-[100%] bg-yellow bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}>
                        <p className={`${styles.subheading2} text-black mb-2`}>Responsibilities</p>
                        <p className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}>{templateResponsibilities}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <div className={`w-[100%] bg-blue bg-opacity-25 border border-grey rounded-2xl px-8 pt-6 pb-10`}>
                        <p className={`${styles.subheading2} text-black mb-2`}>Qualifications</p>
                        <p className={`${styles.subheading7} leading-6 text-black text-justify whitespace-pre-wrap`}>{templateQualifications}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDetailsPage;
