import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContextObject } from "../context/UserContext";
import "./Login.css";
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
    <section id="user-login">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>LOGIN</h2>
        <label>
          USERNAME
          <input
            type="text"
            {...register("userName", {
              required: true,
              minLength: { value: 3, message: "en az üç karekter olmalı" },
            })}
          />
        </label>
        {errors.userName && <p>{errors.userName.message}</p>}
        <label>
          PASSWORD
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default Login;
