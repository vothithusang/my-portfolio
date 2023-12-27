import Nail from "../../../assets/nail.png";
import PhotoLeft1 from "../../../assets/Photo_left_1.png";
import { CardCareer } from "./cardCareer";
const Work = () => {
  return (
    <>
      <main className="">
        <div className="flex items-center justify-around">
          <div className="w-[40%] bg-[#E7E7E7] h-[1px]"></div>
          <div className="flex uppercase font-[mulish] font-bold justify-center items-center">
            <img src={Nail} alt="nail"></img>
            <p>My Craft</p>
          </div>
          <div className="w-[40%] bg-[#E7E7E7] h-[1px]"></div>
        </div>
        <div className="pt-8">
          <CardCareer
            imgUrlLeft={PhotoLeft1}
            imgUrlRight={PhotoLeft1}
            colorLeft="bg-[#E0DBFF]"
            colorRight="bg-[#F4D9C2]"
            textRight="Re-design admin dashboard to your brand"
            textLeft="Saas website for unique start-up brands"
            backgroundColorLeft="bg-[#F5F3FF]"
            backgroundColorRight="bg-[#F5F3FF]"
          ></CardCareer>
        </div>
        <div className="pt-8">
          <CardCareer
            imgUrlLeft={PhotoLeft1}
            imgUrlRight={PhotoLeft1}
            colorLeft="bg-[#EAF2FF]"
            colorRight="bg-[#F1CBEE]"
            textRight="Wallet- mobile wallet is away to cary"
            textLeft="Saas website for unique start-up brands"
            backgroundColorLeft="bg-[#D7E7FF]"
            backgroundColorRight="bg-[#F5E7F4]"
          ></CardCareer>
        </div>
        {/* <div className="h-[300px]"></div> */}
      </main>
    </>
  );
};

export default Work;
