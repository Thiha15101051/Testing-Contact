import { Button, Drawer, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import {FaUserCircle} from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const auth=false;
  return (
    <>
      <div className=" flex py-3 bg-gray-300 lg:px-10 px-5 justify-between items-center">
        <h1 className=" text-2xl lg:text-3xl font-semibold select-none cursor-pointer">
          Contactify
        </h1>
        {/* simple button before authentication */}
        <div className={`flex gap-3  lg:gap-5 ${auth ? "hidden" : "flex"}`}>
          <Link to={"/login"}>
            <button className="  underline  py-1  px-3 rounded text-blue-600 lg:hover:text-gray-800">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className=" bg-orange-500 py-1 shadow-md px-2 rounded lg:hover:bg-orange-400 lg:hover:text-gray-800">
              Register
            </button>
          </Link>
        </div>

        {/* After authentication */}
        <div className={`flex items-center gap-5 ${auth ? "flex" : "hidden"}`}>
          <h3>Mg Mg</h3>
          <Menu shadow="md" width={100} withArrow position="bottom-end">
            <Menu.Target>
              <button className=" hover:text-gray-800">
                <FaUserCircle size={"2.5rem"} />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item className=" text-center font-semibold">
                Profile
              </Menu.Item>
              <Menu.Item color="red" className=" text-center font-semibold">
                Log out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <div className=" flex lg:hidden">
            <button>
              <HiOutlineMenuAlt3 onClick={open} size={"2.3rem"} />
            </button>
          </div>
        </div>
        <Drawer
          opened={opened}
          onClose={close}
          size="50%"
          overlayProps={{ opacity: 0.5, blur: 4 }}
        >
          <div onClick={close}>
            <Link to={"/dashboard"} className=" text-3xl">
              <div className=" text-center font-semibold">Contactify</div>
            </Link>
            <Sidebar />
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
