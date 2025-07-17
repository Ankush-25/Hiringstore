import { Imagepaths } from "../assets/Global_Need_files/ImagesPaths";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../authContext";
import { Api_url } from "../globalConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usrRes = await axios.post(`${Api_url}/login`, {
        email,
        password
      });
      
      if (!usrRes.data || usrRes.data.length === 0) {
        alert("Invalid Credentials");
      };
      
      localStorage.setItem("token", usrRes.data.token);
      localStorage.setItem("userId", usrRes.data.userId);
      setCurrentUser(usrRes.data.userId);
      window.location.href = '/app';
      
    } catch (error) {
      console.log("Login Failed Due To :", error);
    }
  };

  return (
    <div className="LoginContainer">
      <div className="topSectionLogin">
        <img
          className="imagelogo"
          src={Imagepaths.HiringstoreslogoPath}
          alt="HiringStores Logo"
        />
        <p id="txtWelcome">Welcome Back</p>
        <p className="subtitle">Sign in to continue</p>
      </div>
      
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="FormGroup">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="email">Email Address</label>
          <div className="inputHighlight"></div>
        </div>
        
        <div className="FormGroup">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="password">Password</label>
          <div className="inputHighlight"></div>
        </div>
        
        <button className="LoginButton" type="submit">
          <span>Login</span>
          <div className="buttonHighlight"></div>
        </button>
      </form>
      
      <a href="/Reset-password" className="forgotPassword">
        Forgot Password?
      </a>
      
      <div className="signUp">
        <p className="SignupTxt">
          Don't have an account?
          <a href="/signUp" id="signupTxturl">
            {" "}
            Sign up
          </a>
        </p>
      </div>
      
      <div className="brandMessage">
        <p>Elevate your hiring experience</p>
      </div>
    </div>
  );
}

export default Login;