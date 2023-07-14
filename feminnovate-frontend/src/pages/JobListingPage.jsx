import JobContainer from "../components/JobContainer";
import styles from "../style";

const JobListingPage = () => {
    return (
    <div className="grid grid-cols-[2fr_8fr] w-[100vw] my-10">
        <div className="w-[20%]">

        </div>
        <div className="w-[80%] flex justify-start content-start flex-col">
            <span className={`${styles.heading2} text-black`}>Jobs</span>
            <div className="grid grid-cols-3 w-[100%] gap-5 mt-8">
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
                <JobContainer/>
            </div>
        </div>
    </div>
    )
}

export default JobListingPage;