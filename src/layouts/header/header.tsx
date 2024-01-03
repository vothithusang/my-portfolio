import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/svg/logo.svg";
import { setUser } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";

interface IMenu {
  id: number;
  link?: string;
  label: string;
}

const menu: IMenu[] = [
  {
    id: 1,
    label: "home",
  },
  {
    id: 2,
    label: "work",
  },
  {
    id: 3,
    label: "me",
  },
  {
    id: 4,
    label: "fun",
  },
];

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
    <header className="h-[150px]">
      <div className="container flex-between">
        <div className="flex-center ">
          <img className="sidebar-logo" src={Logo} alt="logo" />
          <span className="text-[37px] text-[#242F65] font-extrabold font-mulish mr-[5px]">
            UIUXer
          </span>
        </div>
        <ul className="flex items-center gap-5 font-poppins h-full capitalize">
          {menu?.map((item) => {
            return (
              <li className="h-full">
                <NavLink
                  to="#"
                  className="text-[20px] no-underline text-[#2F2F2F] flex-center"
                >
                  {item?.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
