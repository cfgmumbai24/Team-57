import React, { useState } from 'react';
import './Loginsignup.css';

function Loginsignup() {
    const [action, setAction] = useState("Sign Up");
    const [role, setRole] = useState("Volunteer");

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
                            <input type="text" className='user_input' placeholder='Name'></input>
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
                    <input type="email" className='user_input' placeholder='Email id'></input>
                </div>
                <div className='input'>
                    <i className="fa-solid fa-lock" />
                    <input type="password" className='user_input' placeholder='Password'></input>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : 
                <div className="forget-pswd">Forget Password? <span>Click Here</span></div>
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {
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
        </div>
    )
}

export default Loginsignup;
