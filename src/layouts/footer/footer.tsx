import { Button } from "antd";
import { CircleText } from "../../assets/svg";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center  bg-[url(/images/bg-footer.png)] bg-cover bg-center h-[400px]  relative gap-5 text-white">
      <div>
        <CircleText />
        {/* <div className="circular-text-container">
          <span className="circular-text">
            Thank for scrollingiget in touch!
          </span>
        </div> */}
      </div>
      <div className="">
        <span>akdaksdjalskdjlasdjlkasdjlkasdjlaksdjlkasdjklasdklsa</span>
      </div>
      <div className="border border-[#D092BA] w-full h-[1px]"></div>
      <div className="flex w-[100%]">
        <div className="text-white grid grid-cols-2 w-[50%] pl-[25rem]">
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
        <div className="w-[50%]">
          <Button>ABc</Button>
        </div>
      </div>
      <div className="bottom-0  absolute pb-4">
        <span>
          Copyright © Designerz | Designed by VictorFlow Templates - Powered by
          Webflow
        </span>
      </div>
    </footer>
  );
};

export default Footer;
