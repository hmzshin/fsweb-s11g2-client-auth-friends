import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ...formData,
    },
    mode: "onChange",
  });

  function onSubmitHandler(formData) {
    console.log("form data > ", formData);
    setFormData(formData);
  }

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
