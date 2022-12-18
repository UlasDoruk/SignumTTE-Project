import { useState, useEffect,useContext} from "react";
import "../PlayList/PlayList.css"
import NavBar from "../../NavBar/NavBar";
import TokenContext from "../../Context/TokenContext";

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
    <NavBar/>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card playlist">
                <div className="card-body">
                  <img src={item.images[0].url} className="playlistimg"></img>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {item.description}
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

export default PlayList