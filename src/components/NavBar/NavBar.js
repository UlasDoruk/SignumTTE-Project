import {NavLink} from "react-router-dom"
import "../NavBar/NavBar.css"

// Yönlendirmeler burada

function Navbar() {
  return (
    <>
      <div className="container navigation">
        <nav className="navbar navbar-expand-lg ">
          <NavLink
            to="/Releases"
            className="navbar-text"
            style={{ textDecoration: "none" }}
          >
            Spotify Project
          </NavLink>
          <div className="buttons">
            <NavLink to="/PlayList">
              <button className="btn btn-primary">Playlist</button>
            </NavLink>
            <NavLink to="/Categories">
              <button className="btn btn-primary">Categories</button>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar