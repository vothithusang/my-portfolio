import { Button } from "antd";
import { CircleText } from "../../assets/svg";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="bg-[url(/images/bg-footer.png)] bg-cover bg-center gap-6 flex flex-col items-center justify-center text-white">
      <div className="">
        <CircleText />
      </div>
      <div className=" ">
        <span>akdaksdjalskdjlasdjlkasdjlkasdjlaksdjlkasdjklasdklsa</span>
      </div>
      <div className="border border-[#D092BA] w-full h-[1px]"></div>
      <div className="flex w-[100%] h-28 pb-4">
        <div className="grid grid-cols-2 w-[40%] pl-[18rem]">
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>Work</li>
          </ul>
          <ul>
            <li>Me</li>
          </ul>
          <ul>
            <li>LinkedIn</li>
          </ul>
          <ul>
            <li>Instagram</li>
          </ul>
          <ul>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="w-[50%] ">
          <Button className="w-[500px] h-[60px] text-white bg-">ABc</Button>
        </div>
      </div>
      <div className="bottom-0 pb-4 ">
        <span>
          Copyright © Designerz | Designed by VictorFlow Templates - Powered by
          Webflow
        </span>
      </div>
    </footer>
  );
};

export default Footer;
