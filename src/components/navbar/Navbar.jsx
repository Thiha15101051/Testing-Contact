// import { Drawer, Menu } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/api/authApi";
import { removeUser } from "../../redux/feature/authSlice";

const Navbar = () => {
  // const [opened, { open, close }] = useDisclosure(false);
  const {token,user}=useSelector((state)=>state.authSlice);
  const auth = token ? true : false;
  const nav = useNavigate();

  const [logOut] = useLogoutMutation();
  const dispatch = useDispatch();

  const logOutHandler = async () => {
    const { data } = await logOut(token);
    dispatch(removeUser());
    if (data?.success) {
      return <Navigate to={'/'}/>;
    }
  };
  
  return (
    <>
      <div className=" flex py-3 bg-gray-300 lg:px-10 px-5 justify-between items-center sticky top-0">
        <h1 className=" text-2xl lg:text-3xl font-semibold select-none cursor-pointer">
          Contactify
        </h1>
        {/* simple button before authentication */}
        <div className={`flex gap-3  lg:gap-5 ${auth ? "hidden" : "flex"}`}>
          <Link to={"/login"}>
            <button className="  outline outline-offset-0 outline-gray-300 py-2  px-3 rounded text-color hover:bg-orange-500 hover:text-white duration-300 lg:hover:text-gray-800">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className=" bg-orange-500 py-2 shadow-md px-2 rounded lg:hover:bg-orange-400 lg:hover:text-gray-800">
              Register
            </button>
          </Link>
        </div>

        {/* After authentication */}
        <div className={`flex items-center gap-5 ${auth ? "block" : "hidden"}`}>
          <h3 className=" hidden lg:flex">{user?.name}</h3>
          {/* <Menu shadow="lg" width={100} position="left-end">
            <Menu.Target>
              <button className=" hover:text-gray-800">
                <FaUserCircle size={"2.5rem"} />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                className=" text-center  font-semibold"
                onClick={() => nav("/user-detail")}
              >
                Profile
              </Menu.Item>
              <Menu.Item
                onClick={() => logOutHandler()}
                color="red"
                className=" text-center font-semibold"
              >
                Log out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu> */}
          <div className=" flex">
            <button>
              <HiOutlineMenuAlt3 onClick={open} size={"2.3rem"} />
            </button>
          </div>
        </div>
        {/* <Drawer
          opened={opened}
          onClose={close}
          size="60%"
          overlayProps={{ opacity: 0.5, blur: 4 }}
        >
          <div onClick={close} className=" lg:px-0">
            <Link to={"/"} className=" text-3xl">
              <div className="font-semibold">Contactify</div>
            </Link>
            <Sidebar />
          </div>
        </Drawer> */}
      </div>
    </>
  );
};

export default Navbar;
