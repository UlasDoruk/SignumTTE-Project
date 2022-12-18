import { useState, useEffect,useContext} from "react";
import TokenContext from "../../Context/TokenContext";
import Navbar from "../../NavBar/NavBar"

function PlayList() {

  const { token } = useContext(TokenContext);
  const [data, setData] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
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
    setData(data.playlists.items) 
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {item.description}
                  </h5>
                  <img src={item.images[0].url}></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PlayList