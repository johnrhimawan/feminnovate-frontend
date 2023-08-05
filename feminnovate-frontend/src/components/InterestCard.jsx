import stripe from "../assets/stripe.svg";
import styles from "../style";

const InterestCard = () => {
  return (
    <div className="w-full border-2 border-grey rounded-2xl flex flex-col items-center py-20 bg-blue bg-opacity-25">
      <img src={stripe} className="mx-auto" alt="TCS" />
      <span className={`${styles.subheading2} text-black mt-8`}>Stripe Accountancy</span>
      <span className={`${styles.subheading7}`}>Stripe</span>
    </div>
  );
};

export default InterestCard;
