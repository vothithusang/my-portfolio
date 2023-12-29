import { Project } from "./projects";
const Work = () => {
  return (
    <div className="">
      <div className="flex items-center justify-around">
        <div className="w-[40%] bg-[#E7E7E7] h-[1px]"></div>
        <div className="flex uppercase font-[mulish] font-bold justify-center items-center">
          {/* <img src={ImgNail} alt="nail"></img> */}
          <p>My Craft</p>
        </div>
        <div className="w-[40%] bg-[#E7E7E7] h-[1px]"></div>
      </div>
      <div className="pt-8">
        <Project></Project>
      </div>
    </div>
  );
};

export default Work;
