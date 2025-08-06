import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'


const Loginpopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")
    return (
        <div className='Login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name ' required />
                    }
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='password' required />

                </div>

                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing ,I agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>

            } 

            </form>

        </div>
    )
}

export default Loginpopup



// import React, { useState, useRef } from 'react';
// import './Loginpopup.css';
// import { assets } from '../../assets/assets';
// import axios from 'axios';

// const Loginpopup = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const nameRef = useRef();
//     const emailRef = useRef();
//     const passwordRef = useRef();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const name = nameRef.current?.value;
//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;

//         try {
//             let response;
//             if (currState === "Login") {
//                 response = await axios.post('http://localhost:5000/api/login', {
//                     email,
//                     password
//                 });
//                 console.log("Login Success:", response.data);
//                 // You can store token or navigate
//             } else {
//                 response = await axios.post('http://localhost:5000/api/register', {
//                     name,
//                     email,
//                     password
//                 });
//                 console.log("Signup Success:", response.data);
//             }

//             setShowLogin(false); // Close popup on success
//         } catch (err) {
//             console.error("Error:", err.response?.data?.message || err.message);
//         }
//     };

//     return (
//         <div className='Login-popup'>
//             <form className="login-popup-container" onSubmit={handleSubmit}>
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
//                 </div>

//                 <div className="login-popup-inputs">
//                     {currState === "Sign Up" && <input type="text" placeholder='Your Name' ref={nameRef} required />}
//                     <input type="email" placeholder='Your Email' ref={emailRef} required />
//                     <input type="password" placeholder='Password' ref={passwordRef} required />
//                 </div>

//                 <button type="submit">
//                     {currState === "Sign Up" ? "Create Account" : "Login"}
//                 </button>

//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, I agree to the terms of use & privacy policy.</p>
//                 </div>

//                 {currState === "Login" ? (
//                     <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                 ) : (
//                     <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default Loginpopup;
