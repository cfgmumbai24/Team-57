import React, { useState } from 'react';
import './Loginsignup.css';

function Loginsignup() {
    const [action, setAction] = useState("Sign Up");
    const [role, setRole] = useState("Volunteer");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        if (action === "Sign Up" && name === "") {
            setErrorMessage("Please fill out the name field.");
            return;
        }
        if (email === "") {
            setErrorMessage("Please fill out the email field.");
            return;
        }
        if (password === "") {
            setErrorMessage("Please fill out the password field.");
            return;
        }
        
        // Proceed with the signup/login process
        setErrorMessage("");
        console.log("Form submitted successfully");
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : 
                    <>
                        <div className="input">
                            <i className="fa-solid fa-user" />
                            <input 
                                type="text" 
                                className='user_input' 
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="radio-group">
                            <label htmlFor="volunteer">
                                <input type="radio" id="volunteer" name="role" value="Volunteer"
                                    checked={role === "Volunteer"} onChange={() => setRole("Volunteer")} />
                                Volunteer
                            </label>
                            <label htmlFor="admin">
                                <input type="radio" id="admin" name="role" value="Admin"
                                    checked={role === "Admin"} onChange={() => setRole("Admin")} />
                                Admin
                            </label>
                        </div>
                    </>
                }
                <div className="input">
                    <i className="fa-solid fa-envelope" />
                    <input 
                        type="email" 
                        className='user_input' 
                        placeholder='Email id'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <i className="fa-solid fa-lock" />
                    <input 
                        type="password" 
                        className='user_input' 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {action === "Login" ? 
                <div className="forget-pswd">Forget Password? <span>Click Here</span></div> : 
                <div></div>
            }
            <div className="submit-container">
                <div className={action === "Sign Up" ? "submit" : "submit gray"} onClick={() => {
                    setAction("Sign Up")
                }}>
                    Sign Up
                </div>
                <div className={action === "Login" ? "submit" : "submit gray"} onClick={() => {
                    setAction("Login")
                }}>
                    Login
                </div>
            </div>
            <div className="submit" onClick={handleSubmit}>
                {action === "Sign Up" ? "Submit" : "Submit"}
            </div>
        </div>
    )
}

export default Loginsignup;
