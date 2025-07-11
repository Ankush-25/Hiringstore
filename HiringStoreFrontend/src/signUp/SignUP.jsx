import { Imagepaths } from "../assets/Global_Need_files/ImagesPaths";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../authContext";
import { Api_url } from "../globalConfig";
import "../login/login.css";

function SignUp() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, setCurrentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "Email:\n" + email + "\nPassword:\n" + password + "\nFull Name:\n" + Name
    );
    try {
      const usrRes = await axios.post(`${Api_url}/signup`, {email, password, username});
      if (!usrRes.data || usrRes.data.length === 0) {
        alert("Invalid Credentials");
      };
      localStorage.setItem("token", usrRes.data.token);
      localStorage.setItem("userId", usrRes.data.userId);
      setCurrentUser(usrRes.data.userId);
      console.log(usrRes.data);
      window.location.href = '/app'
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
        <p id="txtWelcome">Welcome Back </p>
      </div>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="FormGroup">
          <label htmlFor="Name">User Name</label>
          <input
            className="inputFields"
            type="text"
            id="Name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
            style={{ backgroundColor: "#211f1f", color: "#fff" }}
          />
        </div>

        <div className="FormGroup">
          <label htmlFor="email">Email:</label>
          <input
            className="inputFields"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ backgroundColor: "#211f1f", color: "#fff" }}
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: "#211f1f", color: "#fff" }}
          />
        </div>
        <button className="LoginButton" type="submit">
          SignUp
        </button>
      </form>
      
      <div className="signUp">
        <p className="SignupTxt">
          I have an account?
          <a href="/login" id="signupTxturl">
            {" "}
            Login       
          </a>
        </p>
      </div>

    </div>
  );
}

export default SignUp;
