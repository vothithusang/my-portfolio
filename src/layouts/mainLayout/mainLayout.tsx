import { Footer } from "../footer";
import { Header } from "../header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
