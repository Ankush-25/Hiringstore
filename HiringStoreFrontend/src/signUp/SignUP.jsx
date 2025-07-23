import { Imagepaths } from "../assets/Global_Need_files/ImagesPaths";
import { useState } from "react";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";
import "../login/login.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }
    
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(username, email, password);
      navigate('/app');
    } catch (error) {
      console.error("SignUp Failed:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
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
        <p id="txtWelcome">Create Your Account</p>
        <p className="subtitle">Join our community today</p>
      </div>
      
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="FormGroup">
          <input
            type="text"
            id="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=" "
            required
            disabled={isLoading}
          />
          <label htmlFor="Name">User Name</label>
          <div className="inputHighlight"></div>
        </div>

        <div className="FormGroup">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            disabled={isLoading}
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
            disabled={isLoading}
          />
          <label htmlFor="password">Password</label>
          <div className="inputHighlight"></div>
        </div>
        
        <div className="FormGroup">
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=" "
            required
            disabled={isLoading}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="inputHighlight"></div>
        </div>
        
        <button 
          className={`LoginButton ${isLoading ? 'loading' : ''}`}
          type="submit"
          disabled={isLoading}
        >
          <span>{isLoading ? 'Creating account...' : 'Sign Up'}</span>
          <div className="buttonHighlight"></div>
        </button>
      </form>
      
      <div className="signUp">
        <p className="SignupTxt">
          Already have an account?
          <a href="/login" id="signupTxturl">
            {" "}
            Login       
          </a>
        </p>
      </div>
      
      <div className="brandMessage">
        <p>Elevate your hiring experience</p>
      </div>
    </div>
  );
}

export default SignUp;