import React, { useState } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import { useNavigate } from "react-router";
import { Alert, Loader, PasswordInput, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import { BiKey, BiUser } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { BsShieldLock } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [failed, setFailed] = useState("");
  const [register, { isLoading }] = useRegisterMutation();
  const nav = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 || value.length > 10
          ? "Password length must be between 8 and 10 characters"
          : null,
      password_confirmation: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <section className=" bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="  flex rounded-xl shadow-md max-w-full items-center p-5 justify-center">
        <div className=" md:w-1/2 px-8 md:px-16">
          <h2 className=" font-bold text-2xl text-color text-center mb-4">
            Register
          </h2>
          <p className=" text-sm font-light text-color mb-3 text-center">
            Welcome, if you are not a member, sign up here
          </p>
          <form
            onSubmit={form.onSubmit(async (values) => {
              const { data, error } = await register(values);
              if (data?.success) {
                nav("/login");
              } else if (error) {
                setFailed(error?.data?.message);
              }
            })}
            className=" flex flex-col gap-4  p-7 shadow "
          >
			 {failed?.length != 0 && (
				<Alert title="Login Failed!" color="red" >
				{failed}
			  </Alert>
				) }
            <div className=" flex gap-3 items-center">
              <BiUser className=" text-xl mr-3" />

              <TextInput
                withAsterisk
                className=" w-full"
                {...form.getInputProps("name")}
                placeholder="Enter your name..."
              />
            </div>

            <div className=" flex gap-3 items-center">
              <GoMail className=" text-xl mr-3" />

              <TextInput
                withAsterisk
                className=" w-full"
                {...form.getInputProps("email")}
                placeholder="Enter your email..."
              />
            </div>
            <div className=" flex gap-3 items-center">
              <BiKey className=" text-xl mr-3" />

              <PasswordInput
                className=" w-full"
                {...form.getInputProps("password")}
                placeholder="Enter your password ..."
              />
            </div>
            <div className="flex gap-3 items-center">
              <BsShieldLock className=" text-xl mr-3" />

              <PasswordInput
                className=" w-full"
                {...form.getInputProps("password_confirmation")}
                placeholder="Retype your password ..."
              />
            </div>

           
            <button
              disabled={isLoading && true}
              type="submit"
              className=" btn-color  font-semibold text-white px-4 py-2 rounded tracking-wider shadow-sm hover:bg-orange-700 duration-300"
            >
				{isLoading ? <Loader className="block mx-auto py-1" color="#fff" variant="dots" size={"md"} /> : (
                "Sign up"
              )}
            </button>
          </form>
          <div className=" my-3 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className=" border rounded py-2 w-full flex justify-center items-center text-sm hover:bg-gray-300 duration-300">
            <FcGoogle className=" text-2xl mr-3" />
            Sign up with Google
          </button>
          <div className="flex justify-between items-center my-3 ">
            <p className=" text-xs text-color font-extralight">
              Already have an account?
            </p>
            <Link to={"/login"}>
              <button className="  outline outline-offset-1 outline-gray-100 px-4 text-sm py-2 flex items-center gap-2 rounded-md tracking-wider shadow-sm hover:bg-orange-500 hover:text-white duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="md:block w-1/2 hidden">
          <img
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?size=626&ext=jpg"
            className=" rounded"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
