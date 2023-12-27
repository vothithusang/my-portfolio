import { Footer } from "../footer";
import { Header } from "../header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="pl-[10%] pr-[10%]">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
