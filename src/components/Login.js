import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContextObject } from "../context/UserContext";
const Login = () => {
  const { user, dispatchUser } = useContext(UserContextObject);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ...user,
    },
    mode: "onChange",
  });

  function onSubmitHandler(formData) {
    console.log("form data > ", formData);
    console.log("user data > ", user);

    dispatchUser({ type: "login", payload: formData });
  }
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        type="text"
        {...register("userName", {
          required: true,
          minLength: { value: 3, message: "en az üç karekter olmalı" },
        })}
      />
      {errors.userName && <p>{errors.userName.message}</p>}
      <input type="password" {...register("password", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default Login;
