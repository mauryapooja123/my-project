import React, { useState } from "react";
//import { useNavigate } from "react-router";
function Add() {
  const [userName, setUserName] = useState({});
  // const nevigate = useNavigate();

  const onChange = (event) => {
    setUserName({ ...userName, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // nevigate("/");
    setUserName(userName);
    console.log(userName);
  };

  return (
    <form onSubmit={onSubmit}>
      <p> id</p>
      <input
        type="number"
        placeholder="enter id"
        name="id"
        value={userName.id}
        onChange={onChange}
      ></input>

      <p>email</p>
      <input
        type="text"
        placeholder="enter email"
        name="email"
        value={userName.email}
        onChange={onChange}
      ></input>
      <p> password</p>
      <input
        type="password"
        placeholder="enter password"
        name="password"
        value={userName.password}
        onChange={onChange}
      ></input>

      <br />
      <button type="submit">submit</button>
    </form>
  );
}
export default Add;
