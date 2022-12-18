import { useState, useEffect,useContext } from "react";
import "../Categories/Categories.css"
import NavBar from "../../NavBar/NavBar";
import TokenContext from "../../Context/TokenContext";
import LoadingContext from "../../Context/LoadingContext";

function Categories() {

  const { token } = useContext(TokenContext);
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);  

  // API call

  const loadData = async () => {
    setLoading(true)
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
    setLoading(false)
    setData(data.genres)
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      <NavBar />
      {loading ? (
        <p style={{ color: "white" }}>Loading...</p>
      ) : (
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-2" key={index}>
                <div className="card categories">
                  <div className="card-body">
                    <h5 className="card-title" >
                      {item}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Categories;
