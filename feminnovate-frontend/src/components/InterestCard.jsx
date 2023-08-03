import tcs from "../assets/tcs.png";

const InterestCard = () => {
  return (
    <div className="w-[100%] border-2 border-grey rounded-2xl cursor-pointer hover:bg-grey hover:bg-opacity-30">
      <img src={tcs} />
    </div>
  );
};
export default InterestCard;
