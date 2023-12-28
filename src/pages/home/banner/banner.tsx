import iconHand from "/images/ic-hand.png";
import ImgBanner from "/images/profile.jpg";
import CircleBanner from "/images/circle-banner.png";
import "./index.scss";

const Banner = () => {
  return (
    <>
      <div className="flex text-center w-full p-[3rem]">
        <div className="w-full relative p-[1rem] flex  container-banner items-center bg-[url(/src/assets/Background.png)]  bg-cover bg-center h-[100%]">
          <div className="flex-[0.5]">
            <p className="font-semibold text-[30px] font-[fraunces] flex justify-center items-center">
              Hello, world!
              <span>
                <img className="w-full" src={iconHand} alt="icon-hand"></img>
              </span>
            </p>
            <p className="font-semibold text-[50px] font-[fraunces] ">
              I'm Thu Sang! a developer
            </p>
          </div>
          <div className="flex-[0.5] ">
            <img className="w-[80%]" src={ImgBanner} alt="avatar"></img>
            <img
              className="w-[235px] h-[235px] absolute bottom-[195px] right-0"
              src={CircleBanner}
              alt="avatar"
            ></img>
          </div>
        </div>
      </div >
    </>
  );
};

export default Banner;
