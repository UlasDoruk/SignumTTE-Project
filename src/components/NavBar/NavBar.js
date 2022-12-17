import {NavLink} from "react-router-dom"
import "../NavBar/NavBar.css"

function Navbar() {
  return (
    <>
      <div className="container navigation">
        <nav className="navbar navbar-expand-lg ">
          <NavLink
            to="/"
            className="navbar-text"
            style={{ textDecoration: "none" }}
          >
            Spotify Project
          </NavLink>
          <NavLink to="/PlayList">
            <button className="btn btn-primary">Playlist</button>
          </NavLink>
          <NavLink to="/Categories">
            <button className="btn btn-primary">Categories</button>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Navbar