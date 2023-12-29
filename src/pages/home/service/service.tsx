import { Col, Row } from "antd";
import { FaceBookSvgComponent } from "../../../assets/svg";
import { TwiterSvgComponent } from "../../../assets/svg";
import { PintrestSvgComponent } from "../../../assets/svg";
import BgMe from "/images/bg-me.png";

const Service = () => {
  return (
    <div className="pt-10">
      <Row>
        <Col span={12} className="flex justify-end items-center">
          <p className="w-[385px] font-[fraunces] font-semibold text-[20px] pl-[5rem]">
            Let me know if you want to talk about a potential collaboration.
            <span className="text-[#B9B9B9]">
              I’m available for freelance work.
            </span>
          </p>
        </Col>
        <Col span={12}>
          <div className="w-[653px] h-[653px] border-solid border-[1px] border-[#E1E1E1] rounded-full relative flex items-center justify-center right-0">
            <span className="absolute bg-white z-[1] top-[204px] left-[43px] p-5 rounded-[50%] border-[1px] border-borderCircle">
              <TwiterSvgComponent />
            </span>
            <span className="absolute top-[295px]  bg-white z-[1]  left-[32px] p-5 rounded-[50%] border-[1px] border-borderCircle">
              <FaceBookSvgComponent />
            </span>
            <span className="absolute top-[386px]  bg-white z-[1]  left-[43px] p-5 rounded-[50%] border-[1px] border-borderCircle">
              <PintrestSvgComponent />
            </span>
            <div className="w-[593px] h-[593px] border-solid border-[1px] border[#E1E1E1] rounded-full absolute right-0 flex items-center">
              <img
                className="w-[517px] h-[517px] object-cover rounded-full absolute right-[-2px]"
                src={BgMe}
                alt="img-me"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Service;
