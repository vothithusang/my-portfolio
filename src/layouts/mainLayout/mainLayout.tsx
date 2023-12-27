import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";


const MainLayout = () => {
  return (
    <main className='w-full'>
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
