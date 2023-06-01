import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import Recently_search from "../components/dashboard/recently_search/Recently_search";
import Home_page from "../pages/Home_page";
import User_detail from "../pages/details/user_detail/User_detail";
import Password from "../components/password/Password";
import Bin from "../components/fixAndManage/bin/Bin";
import MergeAndFix from "../components/fixAndManage/mergeAndFix/MergeAndFix";
import CreateContact_page from "../pages/CreateContact_page";
import EditContact_page from "../pages/EditContact_page";
import Contact_detail from "../pages/details/contact_detail/Contact_detail";
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'

const Path = () => {
	const auth = true;
	return (
		<>
			<Navbar />
			<div className=" flex">
				<div
					className={`hidden lg:flex lg:w-1/5 ${auth ? "flex" : "lg:hidden"}`}
				>
					<Sidebar />
				</div>
				<div
					className={`w-full lg:w-4/5 py-5 ${auth ? "lg:w-4/5" : "lg:w-full"}`}
				>
					<Routes>


						<Route path="/recently_search" element={<Recently_search />} />
						<Route path="/user-detail" element={<User_detail />} />
						<Route path="/pwd" element={<Password />} />
						<Route path="/trash" element={<Bin />} />
						<Route path="/Merge_fix" element={<MergeAndFix />} />
						<Route path="/" element={<Home_page />} />
						<Route path="/contacts/create" element={<CreateContact_page />} />
						<Route path="/contacts/edit/:id" element={<EditContact_page />} />
						<Route path="/contacts/:id" element={<Contact_detail />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default Path;
