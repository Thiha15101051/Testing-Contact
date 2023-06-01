import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useForm } from "@mantine/form";
import { PasswordInput, Group, Button, Box } from "@mantine/core";

const Password = () => {
  const form = useForm({
    initialValues: {
      password: "secret",
      confirmPassword: "seret",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  return (
    <>
      <div className="flex flex-col items-center border lg:w-8/12 lg:p-5 rounded-lg m-3 p-5">
        <h1 className="text-3xl">Name</h1>
        <div className="flex items-center gap-2 text-xl">
          <FaUserCircle />
          <h4>Email</h4>
        </div>
        <Box mx="" className=" w-full">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <h4 className=" md:text-2xl">Password</h4>
            <PasswordInput
              label="Current Password"
              placeholder="Password"
              {...form.getInputProps("password")}
            />

            <PasswordInput
              mt="sm"
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")}
            />

            <PasswordInput
              mt="sm"
              label="Confirm password"
              placeholder="Confirm password"
              {...form.getInputProps("confirmPassword")}
            />
            <button className=" btn-color py-1 px-2 rounded mt-3" type="submit">
              Submit
            </button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Password;
