import { NavLink } from "react-router-dom";
import "./Login.css"

function LoginPage() {

  return (
    <div className="loginpage">
        <NavLink to="/Releases">
          <button className="btn btn-success" style={{ fontWeight: "bold" }}>
            Login To Spotfiy
          </button>
        </NavLink>
    </div>
  );
}

export default LoginPage;
