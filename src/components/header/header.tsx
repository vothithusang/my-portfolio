import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Image from "../../elements/Image";
import { setUser } from "../../redux/slices/userSlice";

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
        // <>
        //     <div>
        //         <header className="text-blackColor p-[10px] text-center flex justify-between">
        //             <div>
        //                 <img src={logo} alt="logo"></img>
        //             </div>
        //             <div className="flex justify-between w-[20%] pr-10 items-center">
        //                 <h1>Home</h1>
        //                 <h1>Work</h1>
        //                 <h1>Me</h1>
        //             </div>
        //         </header>
        //     </div>
        // </>
        // HEADER MAKE BY ANH
        <header>
            <div className='container header-wrapper w-full pb-3' >
                <div className="flex items-center justify-between">
                    <div className="w-[60px] h-[60px]">
                        <Image src='images/logo.png' alt="Logo" />
                    </div>
                    <div className="text-mainColor text-[18px]" >
                        <ul className="flex items-center gap-5">
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
