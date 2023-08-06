import Navbar from "../components/Navbar";
import WorkshopContainer from "../components/WorkshopContainer";
import WorkshopSidebar from "../components/WorkshopSidebar";
import styles from "../style";

const WorkshopListingPage = () => {
    return (
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
                        <WorkshopContainer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkshopListingPage;