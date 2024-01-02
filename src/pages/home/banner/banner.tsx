import iconHand from "/images/ic-hand.png";
import ImgBanner from "/images/profile.jpg";
import CircleBanner from "/images/circle-banner.png";
import "./index.scss";

const Banner = () => {
  return (
    <section className="text-mainTextColor px-4">
      <div className="w-full grid grid-cols-2 items-center bg-[url(/images/bg-banner.png)] bg-cover bg-center relative">
        <div className="flex-center flex-col text-center">
          <p className="font-semibold text-[30px] font-[fraunces] flex items-center">
            Hello, world!
            <span className="w-11">
              <img src={iconHand} alt="icon-hand"></img>
            </span>
          </p>
          <p className="font-semibold text-[50px] font-[fraunces] ">
            I'm Thu Sang! a developer
          </p>
          <span className="text-[16px] text-purpleColor font-medium">
            yesimbobdylan@gmail.com
          </span>
        </div>
        <div>
          <img className="w-[80%] " src={ImgBanner} alt="avatar"></img>
          <img
            className="w-[200px] h-[200px] absolute bottom-[100px] right-0"
            src={CircleBanner}
            alt="avatar"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Banner;
