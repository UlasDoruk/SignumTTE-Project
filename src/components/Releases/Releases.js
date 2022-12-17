import { useState, useEffect } from "react";

function Layout() {

  const [data, setData] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?country=SE&limit=48&offset=5",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer BQBaWkoD8li4aqNyENtj1uiVgLRnOFTIhwZnGEypm_FHsaDxwMRrTxU6NA4j8ROxIczzH8VFoJc8lzBgFq5C9JEsWSZ9nkj2D05SeXbVPYZz26uh2F61FAtiVB3F55xLGaAT",
        },
      }
    );
    let data = await response.json();
    setData(data.albums.items);
  };

  useEffect(() => {
    loadData();
  }, []);

  
  return (
    <> 
    <div className="row">
      {data.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{fontWeight:"bold"}}>{item.name}</h5>
                  <h6>{item.album_type}</h6>
                  <img src={item.images[1].url}></img>
                </div>
              </div>
            </div>
          );
      })}
      
            </div>
    </>
  );
}

export default Layout;
