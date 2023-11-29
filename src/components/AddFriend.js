import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FriendsContextObject } from "../context/FriendsContext";
const AddFriend = () => {
  const { friends, dispatchFriends } = useContext(FriendsContextObject);
  const { push } = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      age: "",
      email: "",
    },
    mode: "onChange",
  });

  function onSubmitHandler(formData) {
    console.log("form data > ", formData);
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/friends", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        console.log("post başarılı ", response.data);

        setTimeout(() => {
          push("/friends");
        }, 1000);

        dispatchFriends({
          type: "login",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section id="user-login">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>LOGIN</h2>
        <label>
          FRIEND NAME
          <input
            type="text"
            {...register("name", {
              required: true,
              minLength: { value: 3, message: "en az üç karekter olmalı" },
            })}
          />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
        <label>
          FRIEND EMAIL
          <input type="text" {...register("password", { required: true })} />
        </label>
        <label>
          FRIEND AGE
          <input type="text" {...register("age", { required: true })} />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default AddFriend;
