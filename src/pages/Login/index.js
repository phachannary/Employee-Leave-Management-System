import React from "react";
import "./login.css";
import Header from "../../components/HeaderComponent";
class Login extends React.Component {
  render() {
    return (
      <div >
        <Header parentToChild={"Admin Login  |  Employee Login"}/>
        <div className="login-container">
          <div>
            <h3>Welcome to ELMS</h3>
            <form method="post">
              <h5>EMPLOYEE</h5>
              <div>
                <div class="txt_field">
                  <label>Username</label>
                  <input type="text" required />
                </div>
                <div class="txt_field">
                  <label>Password</label>
                  <input type="password" required />
            
                </div>
                <div class="form-btm">
                  <span class="pass"><a href="#">Forgot Password?</a></span>
                  <input type="submit" value="Login" />
                </div>
                <div class="form-btm">
                  <span class="signup_link">Not a member?</span>
                  <a href="#">Signup</a>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Login;
