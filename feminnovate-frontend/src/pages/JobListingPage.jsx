import JobContainer from "../components/JobContainer";
import JobSidebar from "../components/JobSidebar";
import Navbar from "../components/Navbar";
import styles from "../style";

const JobListingPage = () => {
    return (
        <>
            <Navbar/>
            <div className="flex w-[100%] my-10 px-10 bg-white">
                <div className="w-[20%]">
                    <JobSidebar />
                </div>
                <div className="w-[80%] flex justify-start content-start flex-col">
                    <span className={`${styles.heading2} text-black`}>
                        Jobs
                    </span>
                    <div className="grid grid-cols-3 w-[100%] gap-5 mt-8">
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                        <JobContainer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobListingPage;
