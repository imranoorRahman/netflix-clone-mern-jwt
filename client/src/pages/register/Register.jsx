import { useState, useRef } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleEmailClick = () => {
    setEmail(emailRef.current.value);
  };

  const handlePasswordClick = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginBtn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Enter your email address to create your membership.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerBtn" onClick={handleEmailClick}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerBtn" onClick={handlePasswordClick}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
