import "./login.css"
import React, { useState } from 'react';
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email, 'Password:', password);
    };

    return ( 
        <div className='LoginContainer'>
            <form className="LoginForm" onSubmit={handleSubmit} >
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
                <button className="LoginButton" type="submit">Login</button>
            </form>
        </div>
    );
}



export default Login;