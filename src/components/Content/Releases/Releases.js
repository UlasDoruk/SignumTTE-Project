import { useState, useEffect, useContext } from "react";
import "../Releases/Releases.css"
import NavBar from "../../NavBar/NavBar"
import TokenContext from "../../Context/TokenContext";
import LoadingContext from "../../Context/LoadingContext";

function Layout() {

  const {token} = useContext(TokenContext)
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);

// API call 

  const loadData = async () => {
    setLoading(true)
    let response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?country=SE&limit=48&offset=5",
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
    setData(data.albums.items)
  };

  useEffect(() => {
    loadData();
  }, []);

  // JSX bölümü

  return (
    <>
      <NavBar />
      {loading ? (
        <p style={{color:"white"}}>Loading...</p>
      ) : (
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-4 releases" key={index}>
                <div className="card releases">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>
                      {item.name}
                    </h5>
                    <h6>{item.album_type}</h6>
                    <img src={item.images[1].url} className="releases img"></img>
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

export default Layout;
