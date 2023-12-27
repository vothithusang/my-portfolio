import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import "./index.scss";
import logo from "../../assets/Logo.png";

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
      <div>
        <header className="text-blackColor p-[10px] text-center flex justify-between">
          <div>
            <img src={logo} alt="logo"></img>
          </div>
          <div className="flex justify-between w-[20%] pr-10 items-center">
            <h1>Home</h1>
            <h1>Work</h1>
            <h1>Me</h1>
          </div>
        </header>
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
};

export default Header;
