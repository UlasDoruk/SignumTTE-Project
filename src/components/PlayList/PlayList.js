import { useState, useEffect } from "react";

function PlayList() {

  const [data, setData] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer BQB6oXd0HLV0gcuILeoulhLQScOGs00Hl-y3LaEk3hKssUWmBIDyiVMoGzhsp8q8yzF08J-281axqp997j3KSL8GdprCXrz4r1bZlXqrK4FS_5HHx0Bzc6QCO1OzXSxbpD_HB4psZBo4O-9SRRQdjO8VRJ0lYilshRHt47EqKDH0M4pU",
        },
      }
    );
    let data = await response.json();
    setData(data.playlists.items);
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
    )
}

export default PlayList