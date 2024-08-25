import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import "./index.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    // console.log(response);
    // const jwtCoded = jwtDecode(response.credential);
    // console.log(jwtCoded);
    navigate("/home");
  };
  return (
    <>
      <div className="login-bg-container">
        <h1 className="title">REACHINBOX</h1>
        <div className="card">
          <h1 className="login-title">Create a new account</h1>
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <button className="button">Create An Account</button>
          <p>
            Already Have An Account?<span>Sign In</span>
          </p>
        </div>
        <p className="footer-title">2023 Reachinbox. All Rights Reserved</p>
      </div>
    </>
  );
};

export default LoginPage;
