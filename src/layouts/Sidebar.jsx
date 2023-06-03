import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineProject, AiOutlineSetting } from 'react-icons/ai'
import { BiTask, BiLogIn } from 'react-icons/Bi'
import { FiUsers } from 'react-icons/Fi'
import { BsQuestionCircle } from 'react-icons/bs'
import { logout } from "../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch()
    const links = [
        { name: "Home", link: "/home", icon: AiOutlineHome },
        { name: "Projects", link: "/projects", icon: AiOutlineProject },
        { name: "Tasks", link: "/tasks", icon: BiTask },
        { name: "Users", link: "/", icon: FiUsers },
    ];

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <div>
                <div className="flex flex-col items-center space-y-6 py-4 px-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-2 py-1 rounded-lg border border-blue-300 focus:outline-none"
                    />
                </div>
                <ul className="space-y-2">
                    <li>
                        {links.map((link, key) => (
                            <NavLink
                                key={key}
                                to={link.link}
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex font-medium text-gray-60 text-blue-400 p-2 rounded-lg bg-gray-100 hover:bg-blue-100 my-2"
                                        : "flex font-medium text-gray-600 hover:text-blue-400 p-2 rounded-lg bg-gray-100 hover:bg-blue-100 my-2"
                                }
                            >
                                <div className="mr-2 ">{React.createElement(link?.icon, { size: "20" })}</div>
                                {link.name}
                            </NavLink>
                        ))}
                    </li>
                </ul>
            </div>

            <div>
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center font-medium text-gray-600 hover:text-blue-400 p-2 rounded-lg   my-2"
                                    : "flex font-medium items-center text-gray-600 hover:text-blue-400 p-2 rounded-lg   my-2"
                            }
                        >
                            <BsQuestionCircle className="mr-2  " />
                            Support
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center font-medium text-gray-600 hover:text-blue-400 p-2 rounded-lg   my-2"
                                    : "flex font-medium items-center text-gray-600 hover:text-blue-400 p-2 rounded-lg   my-2"
                            }
                        >
                            <AiOutlineSetting className="mr-2  " />
                            Settings
                        </NavLink>
                    </li>
                </ul>
                <div className="flex border-t py-4 justify-center items-center space-x-2">
                    <div className="">
                        <span className="text-gray-800 font-bold">{user?.name}</span>
                        <p className="text-gray-500">{user?.email}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex font-medium  text-red-600 -400 p-2 rounded-lg "
                    >
                        <BiLogIn className="mr-3 h-6 w-6" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
