import { useState, useEffect,useContext} from "react";
import "../PlayList/PlayList.css"
import NavBar from "../../NavBar/NavBar";
import TokenContext from "../../Context/TokenContext";
import LoadingContext from "../../Context/LoadingContext";

function PlayList() {

  const { token } = useContext(TokenContext);
  const [data, setData] = useState([]);
  const {loading,setLoading} = useContext(LoadingContext)

  // API call

  const loadData = async () => {
    setLoading(true)
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
    setLoading(false)
    setData(data.playlists.items) 
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <p style={{color:"white"}}>Loading...</p>
      ) : (
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-4 playlist" key={index}>
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
      )}
    </>
  );
}

export default PlayList