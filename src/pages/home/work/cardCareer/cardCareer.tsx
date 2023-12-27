import { Button, Col, Row } from "antd";
interface CardCareerProps {
  imgUrlLeft: string;
  imgUrlRight: string;
  colorLeft: string;
  colorRight: string;
  textLeft: string;
  textRight: string;
  backgroundColorLeft: string;
  backgroundColorRight: string;
}
const CardCareer = ({
  imgUrlLeft,
  imgUrlRight,
  colorLeft,
  colorRight,
  textLeft,
  textRight,
  backgroundColorLeft,
  backgroundColorRight,
}: CardCareerProps) => {
  return (
    <>
      <Row className="">
        <Col
          className={`${backgroundColorLeft} p-8 mr-3 rounded-[20px]`}
          span={11}
        >
          <div className={`${colorLeft} rounded-[20px]`}>
            <img
              className="pt-8 pr-4"
              src={imgUrlLeft}
              alt="image-1-left"
            ></img>
          </div>
          <p className="font-[fraunces] font-semibold text-[30px] pt-7">
            {textLeft}
          </p>
          <Button className="bg-black text-white h-14 w-56">
            Read Case Study
          </Button>
        </Col>
        <Col
          className={`${backgroundColorRight} p-8 ml-3 rounded-[20px]`}
          span={11}
        >
          <div className={`${colorRight} rounded-[20px]`}>
            <img
              className="pt-8 pr-4"
              src={imgUrlRight}
              alt="image-1-left"
            ></img>
          </div>
          <p className="font-[fraunces] font-semibold text-[30px] pt-7">
            {textRight}
          </p>
          <Button className="bg-black text-white h-14 w-56">
            Read Case Study
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CardCareer;
