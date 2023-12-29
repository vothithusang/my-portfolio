import { Button, Col, Row } from "antd";
import { ProjectList, list } from "../../../../utils/listProject";
import { useState } from "react";

const Project = () => {
  const [listProject, setListProject] = useState(list.slice(0, 3));

  return (
    <div>
      <Row>
        {listProject.map((item: ProjectList) => {
          return (
            <Col
              span={11}
              className={`${item.backgroundColor} p-8 mr-3 rounded-[20px] mb-5`}
            >
              <div className={`${item.colorText} rounded-[20px]`}>
                <img
                  className="pt-8 pr-4"
                  src={item.imgUrl}
                  alt="image-1-left"
                ></img>
              </div>
              <p className="font-[fraunces] font-semibold text-[30px] pt-7">
                {item.content}
              </p>
              <Button className="bg-black text-white h-14 w-52">
                Read Case Study
              </Button>
            </Col>
          );
        })}
        <Col
          span={11}
          className={`bg-white p-8 rounded-[20px] mb-5 flex items-center justify-center`}
        >
          <div
            className="w-40 h-40 border-solid bg-[#457eda] text-white rounded-full flex items-center text-center cursor-pointer"
            onClick={() => {
              if (listProject.length < list.length) {
                setListProject(list);
              } else {
                setListProject(list.slice(0, 3));
              }
            }}
          >
            <p className="w-full">
              {listProject.length < list.length ? "Show More" : "Show less"}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
