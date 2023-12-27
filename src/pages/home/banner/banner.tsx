import Avartar from "assets/images/Avartar.png";
import IconHand from "assets/images/Icon_hand.png";
import "./index.scss";

const Banner = () => {
  return (
    <>
      <div className="flex text-center w-[100%] justify-center">
        <div className="w-[100%] h-[500px] relative flex container-banner items-center">
          {/* <img className="w-[100%]" src={backGround} alt="back-ground"></img> */}
          <div className="flex-[0.5]">
            <p className="font-semibold text-[30px] font-[fraunces] flex justify-center items-center">
              Hello, world!{" "}
              <span>
                <img className="w-[100%]" src={IconHand} alt="icon-hand"></img>
              </span>
            </p>
            <p className="font-semibold text-[50px] font-[fraunces] ">
              I'm Thu Sang! a developer
            </p>
          </div>
          <div className="flex-[0.5]">
            <img className="w-[100%]" src={Avartar} alt="avatar"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
