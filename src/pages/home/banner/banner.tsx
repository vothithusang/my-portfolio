import iconHand from "../../../assets/Icon_hand.png";
import Avartar from "../../../assets/Avartar.png";
import "./index.scss";

const Banner = () => {
  return (
    <>
      <div className="flex text-center w-full p-[3rem]">
        <div className="w-full relative p-[1rem] flex  container-banner items-center bg-[url(/src/assets/Background.png)] bg-[5%] h-[100%]">
          <div className="flex-[0.5]">
            <p className="font-semibold text-[30px] font-[fraunces] flex justify-center items-center">
              Hello, world!{" "}
              <span>
                <img className="w-full" src={iconHand} alt="icon-hand"></img>
              </span>
            </p>
            <p className="font-semibold text-[50px] font-[fraunces] ">
              I'm Thu Sang! a developer
            </p>
          </div>
          <div className="flex-[0.5] ">
            <img className="w-[80%]" src={Avartar} alt="avatar"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
