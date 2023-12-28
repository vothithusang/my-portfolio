import { Col, Row } from "antd";
import BgMe from "../../../assets/bg-me.png";

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
          <div className="w-56 h-56 border-solid border-[1px] border-[#E1E1E1] rounded-full relative flex items-center justify-center right-0">
            <div className="w-48 h-48 border-solid border-[1px] border[#E1E1E1] rounded-full absolute right-0 flex items-center">
              <img
                className="w-36 h-36 object-cover rounded-full absolute right-[-2px]"
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
