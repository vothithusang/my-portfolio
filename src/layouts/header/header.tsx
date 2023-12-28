import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";
import Logo from '../../assets/images/svg/logo.svg';
import { NavLink } from "react-router-dom";


const Header = () => {
  const dispath = useDispatch();

  const _user = useSelector((state: RootState) => state?.user);
  useEffect(() => {
    const user = {
      id: 1,
      name: "abc",
    };
    dispath(setUser(user));
  }, []);

  console.log("user", _user);
  return (
    // <>
    //   <div>
    //     <header className="text-blackColor p-[10px] text-center flex justify-between">
    //       <div>
    //         <img src={Logo} alt="logo"></img>
    //       </div>
    //       {/* <div className="flex justify-between w-[20%] pr-10 items-center">
    //         <h1>Home</h1>
    //         <h1>Work</h1>
    //         <h1>Me</h1>
    //       </div> */}
    //     </header>
    //   </div>
    //   {/* <Outlet></Outlet> */}
    // </>

    //UPDATE HEADER
    <header>
      <div className="container header-wrapper w-full">
        <div>
          <div className="m-auto w-20">
            <img className="sidebar-logo" src={Logo} alt='logo' />
          </div>
          <div className="text-mainColor text-[18px]" >
            <ul className="flex items-center gap-5 ">
              <li>
                <NavLink to='#'>
                  <span>Comic List</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='#'>
                  <span>Category</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='#'>
                  <span>Popular</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='#'>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
