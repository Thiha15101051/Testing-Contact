import React from "react";
import CreateContactForm from "../components/contacts/CreateContactForm";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const CreateContact_page = () => {
  const nav = useNavigate();
  const back = () => {
    nav(-1);
  };
  return (
    <div className="lg:w-[50vw] mx-auto  relative w-[90%]">
      <button onClick={() => back()}>
        <p className=" text-xl hidden md:block absolute md:top-[5%] left-[-15%] hover:rounded-full hover:bg-gray-200 px-3">
          <TbArrowBackUp />
        </p>
      </button>
      <button onClick={() => back()}>
        <p className=" text-xl flex items-center gap-3 mb-4   lg:hidden hover:rounded-full hover:bg-gray-200 px-3">
          <TbArrowBackUp /> <span className=" text-base">Back</span>
        </p>
      </button>
      <h1 className=" text-color font-semibold text-xl mb-5">
        Enter Contact Details
      </h1>
      <CreateContactForm />
    </div>
  );
};

export default CreateContact_page;
