import { NavLink } from "react-router-dom";
import "./Login.css"

// Authorization için gerekli olan bölüm (default olarak .env dosyasında bulunana ID ve SECRET bilgilerini Spotify'e geçiyoruz)

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
