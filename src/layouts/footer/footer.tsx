import { CopyOutlined } from "@ant-design/icons";
import { CircleText } from "../../assets/svg";
import "./index.scss";
import { Input, Tooltip } from "antd";
import { useState } from "react";

interface MenuFooter {
  title: string;
}

const Footer = () => {
  const [isOpenToolTip, setIsOpenToolTip] = useState(false);
  const [email, setEmail] = useState("");

  const menuFooter: MenuFooter[] = [
    {
      title: "Home",
    },
    {
      title: "Work",
    },
    {
      title: "Me",
    },
    {
      title: "LinkedIn",
    },
    {
      title: "Instagram",
    },
    {
      title: "Twitter",
    },
  ];
  return (
    <footer className="bg-[url(/images/bg-footer.png)] bg-cover bg-center gap-6 flex-center flex-col text-white">
      <CircleText />
      <div className="font-[Mulish] text-[30px]">
        <span>
          Get In Touch - Availablefor Work - Get In Touch - Availablefor Work
        </span>
      </div>
      <div className="py-4 w-full">
        <div className="border border-[#D092BA] w-full h-[1px]"></div>{" "}
        {/*draw liner */}
      </div>
      <div className="flex w-[100%] h-36 items-center">
        <div className="grid grid-cols-2 w-[40%] pl-[15rem] gap-3 font-[fraunces]">
          {menuFooter.map((item: MenuFooter) => {
            return (
              <ul>
                <li>{item.title}</li>
              </ul>
            );
          })}
        </div>
        <div className="w-[60%] flex-center">
          <div className="w-[550px] h-[60px] rounded-[10px] bg-white text-center flex items-center justify-around">
            <span className="text-black font-[fraunces] w-[350px] h-full">
              <Input
                className="h-full border border-white "
                placeholder=" Interested in working together? Drop me a line"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
            </span>
            <div className="w-[150px] h-[40px] rounded-[10px] text-white bg-black text-center flex items-center justify-evenly">
              <Tooltip
                placement="leftBottom"
                title={"Copited"}
                open={isOpenToolTip}
              >
                <CopyOutlined
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpenToolTip(true);
                    navigator.clipboard.writeText(email);
                    setTimeout(() => {
                      setIsOpenToolTip(false);
                    }, 1000);
                  }}
                />
              </Tooltip>

              <span>Copy Email</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 w-full">
        <div className="border border-[#D092BA] w-full h-[1px]"></div>
        {/*draw liner */}
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
