import { useState, useEffect,useContext } from "react";
import "../Categories/Categories.css"
import NavBar from "../../NavBar/NavBar";
import TokenContext from "../../Context/TokenContext";

function Categories() {

  const { token } = useContext(TokenContext);
  const [data, setData] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            `Bearer ${token}`,
        },
      }
    );
    let data = await response.json();
    setData(data.genres)
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
    <NavBar/>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-2" key={index}>
              <div className="card categories">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {item}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
