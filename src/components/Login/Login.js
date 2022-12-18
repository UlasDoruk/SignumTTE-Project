import React, { useContext, useEffect } from "react";
import "../Login/Login.css"
import TokenContext from "../Context/TokenContext";

function LoginBtn() {

  const {token,setToken} = useContext(TokenContext);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  console.log(token)

  return (
    <div className="loginpage">
      {!token ? (
        <a
          href={`${process.env.REACT_APP_AUTH_ENDPOINT}client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=http://localhost:3000/Releases&response_type=token`}
        >
          <button className="btn btn-success" style={{ fontWeight: "bold" }}>
            Login To Spotfiy
          </button>{" "}
        </a>
      ) : (
        <button
          className="btn btn-danger"
          style={{ fontWeight: "bold" }}
          onClick={logout}
        >
          Logout{" "}
        </button>
      )}
    </div>
  );
}

export default LoginBtn;
