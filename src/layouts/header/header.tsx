import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setUser } from "../../redux/slices/userSlice";
import "./index.scss";

const Header = () => {
  const dispath = useDispatch();

  const _user = useSelector((state: any) => state?.user);
  useEffect(() => {
    const user = {
      id: 1,
      name: "abc",
    };
    dispath(setUser(user));
  }, []);

  console.log("user", _user);
  return (
    <>
      <div className="rounded-[8px] border border-solid  card">
        <header className="text-blackColor p-[10px] text-center">
          <h1>Your Website Name</h1>
        </header>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
