import { Header } from "../header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div >
        <div className="pl-[10%] pr-[10%]">   <Header></Header></div>

        <div className="pl-[5%] pr-[5%]">    <Outlet></Outlet></div>

      </div>
    </>
  );
};

export default MainLayout;
