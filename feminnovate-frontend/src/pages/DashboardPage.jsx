import Navbar from "../components/Navbar";
import styles from "../style";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.heading2} text-black`}>Hello, </div>
    </>
  );
};

export default DashboardPage;
