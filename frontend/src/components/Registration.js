import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Registration = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const { success, message } = await axios.post(
        "http://localhost:8000/user/signup",
        userDetails
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <h2>Registration</h2>
        <input
          name="username"
          type="text"
          value={userDetails["username"]}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          value={userDetails["password"]}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
      <>
        Already have an account? <Link to="/login">Login</Link>
      </>
    </div>
  );
};

export default Registration;
