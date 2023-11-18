import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../styles/Login.css";

const Signup = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registered successfully!");
        alert('Signup successful!');
        // Navigate to the policy.js route upon successful signup
        navigate("/");
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  return (
    <>
    <style>
        {`
          body {
            background: url('https://st.depositphotos.com/4514073/59538/i/450/depositphotos_595386334-stock-photo-set-cosmetic-skin-care-products.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            height: 100vh;
          }

        `}
      </style>
          <div style={{ margin: '40px 0' }}></div>
      <div className="top-margin"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-heading">SignIn</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <p className="already-registered">
              New account?{" "}
              <Link to="/SignupPage" className="text-decoration-underline text-info">
                SignUp
              </Link>{" "}
            </p>
            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={!formData.email || !formData.password}
              >
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-margin"></div>
      <div style={{ margin: '40px 0' }}></div>
  
    </>
  );
};

export default Signup;
