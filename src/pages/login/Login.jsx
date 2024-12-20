import "./Login.css"
import assets from "../../assets/assets"
import { useState } from "react"

function Login() {

  const [curectState, setCurectState] = useState("Sing up")
  return (
    <div className="login">
      <img src={assets.logo_big} alt="img" className="logo" />


      <div className="signup-container ">
        <form className="signup-form">
          <h2 className="signup-title">{curectState}</h2>
          <div className="input-group">
            {curectState === "Sing up" ? <input type="text" placeholder="username" required /> : null}

          </div>
          <div className="input-group">

            <input type="email" placeholder="Email address" required />
          </div>
          <div className="input-group">

            <input type="password" placeholder="password" required />
          </div>
          <button className="signup-button" type="submit">{curectState === "Sing up" ? "Create account" : "Login Now"}</button>
          <div className="terms">
            <input type="checkbox" required />
            <span>Agree to the terms of use & privacy policy.</span>
          </div>

          {
            curectState === "Sing up" ? <p className="login-link">
              Already have an account? <a href="#" onClick={() => setCurectState("Login")}>Login here</a>
            </p> : <p className="login-link">Create an account? <a href="#" onClick={() => setCurectState("Sing up")}>Click here</a></p>
          }



        </form>
      </div>

    </div>
  )
}

export default Login