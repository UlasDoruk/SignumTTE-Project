import React from 'react'
import "../NavBar/NavBar.css"

function Navbar() {
  return (
    <>
      <div className="container navigation">
        <nav className="navbar navbar-expand-lg ">
          <p className="navbar-text">Navbar</p>
          {/*  onClick={()=>{
                window.scrollTo({top:0,left:0,behaviour:"smooth"})
            }} */}
          <button className="btn btn-primary">Go To Top</button>
        </nav>
      </div>
    </>
  );
}

export default Navbar