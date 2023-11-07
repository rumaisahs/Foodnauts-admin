import React from "react";
import "./AdminLogin.css";
import FNLogo from "../../images/foodnauts-LogoLabel.png";

const AdminLogin = () => {
  return (
    <div
      class="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh"}}
    >

      <div className="row justify-content-center">
        <div class="col-12 bg-dark p-5 text-light rounded-5" style={{ width: "500px" }}>
          <div className="p-4 text-center">
            <img src={FNLogo} alt="MHZ Logo" width="350px" />
          </div>

          <h1 class="login-title text-center mb-5">ADMIN</h1>
          <form>
            <div class="mb-5">
              {/* <label for="email" class="form-label">
                Email
              </label> */}
              <input
                type="email"
                class="form-control login-input bg-dark text-light rounded-0 border-0 border-bottom"
                id="email"
                placeholder="Email/Username"
                required
              />
            </div>
            <div class="mb-5">
              {/* <label for="password" class="form-label ">
                Password
              </label> */}
              <input
                type="password"
                class="form-control login-input bg-dark text-light rounded-0 border-0 border-bottom "
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <a href="/analytics" class="btn login-button px-4 py-2">
              Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
