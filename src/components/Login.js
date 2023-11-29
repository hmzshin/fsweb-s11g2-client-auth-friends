import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContextObject } from "../context/UserContext";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { user, dispatchUser } = useContext(UserContextObject);
  const history = useHistory();
  const token = localStorage.getItem("token");

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

    axios
      .post("http://localhost:9000/api/login", {
        username: "workintech",
        password: "wecandoit",
      })
      .then(function (response) {
        console.log("bu iş oldu", response.data);
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          history.push("/friends");
        }, 1000);

        dispatchUser({
          type: "login",
          payload: {
            username: "workintech",
            password: "wecandoit",
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    token &&
      axios
        .get("http://localhost:9000/api/friends", {
          headers: { Authorization: token },
        })
        .then(function (response) {
          console.log("neden");
          dispatchUser({
            type: "login",
            payload: {
              username: "workintech",
              password: "wecandoit",
            },
          });
        })
        .catch(function (error) {
          console.log(error);
        });
  }, []);

  return (
    <section id="user-login">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>LOGIN</h2>
        <label>
          USERNAME
          <input
            type="text"
            {...register("username", {
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
