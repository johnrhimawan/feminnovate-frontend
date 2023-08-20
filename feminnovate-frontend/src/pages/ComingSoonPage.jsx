import Navbar from '../components/Navbar';
import under_development from '../assets/under-development.png';
import styles from '../style';

const ComingSoonPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[77.5vh] flex-col">
        <img src={under_development} className="w-5/12" />
        <span className={`${styles.heading2}`}>Sorry, this page is still under construction!</span>
        <span className={`${styles.subheading3} text-black/50 mt-2`}>Perhaps you want to explore our other pages first?</span>
      </div>
    </>
  );
};

export default ComingSoonPage;
