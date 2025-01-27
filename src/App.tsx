import React, { useEffect, useState } from "react";
import { NetworkInstance, ApiResult, ApiSuccess, handleApiResponse, handleApiResponseWithSpecificError } from "@nw18/fe-networking";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
 
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
 
const baseUrl = "https://jsonplaceholder.typicode.com/";
 
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  const onSubmit = (data) => console.log(data);
 
  return (
      <>
          <p className="title">Registration Form</p>
 
          <form className="App" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register("name")} />
              <input type="email" {...register("email", { required: true })} />
              {errors.email && <span style={{ color: "red" }}>
                  *Email* is mandatory </span>}
              <input type="password" {...register("password")} />
              <Link to="/about">Sign Up</Link>
          </form>
      </>
  );
}
const styles = {
  App: {
    display: "flex",
    left: "100",
    justifyContent: "center",
    flexDirection: "column" as "column",
    alignItems: "center",
    height: "100%",
  },
};
 
export default App;