import iconHand from "/images/ic-hand.png";
import ImgBanner from "/images/profile.jpg";
import CircleBanner from "/images/circle-banner.png";
import "./index.scss";

const Banner = () => {
  return (
    <div className="text-mainTextColor">
      <div className="container">
        <div className="rounded-[20px] w-full relative flex items-center bg-[url(/images/bg-banner.png)] bg-cover bg-center h-[100%]">
          <div className="flex-[0.5] pl-[90px]">
            <p className="font-semibold text-[30px] font-[fraunces] flex items-center">
              Hello, world!
              <span className="w-11">
                <img src={iconHand} alt="icon-hand"></img>
              </span>
            </p>
            <p className="font-semibold text-[50px] font-[fraunces] ">
              I'm Thu Sang! a developer
            </p>
            <span className="text-[16px] text-purpleColor font-medium">yesimbobdylan@gmail.com</span>
          </div>
          <div className="flex-[0.5]">
            <img className="w-[80%]" src={ImgBanner} alt="avatar"></img>
            <img
              className="w-[235px] h-[235px] absolute bottom-[195px] right-0"
              src={CircleBanner}
              alt="avatar"
            ></img>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
