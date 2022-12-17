import { useState, useEffect } from "react";

function Categories() {

  const [data, setData] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer BQBCLxeQpqns4yaGpE3e5AiqI6FAnpEdJTuCC0bjBtCJmw0_YWnCr6yGuOqnF_iFfuLsBi18HTJpcQpiKV33ax_mm3b24NuxAjCmV95Ga9EFWUZ-ZLhkf9ugrJY1NROeph3fZj3KPK7mkXpot-x6jkq6De6gKYnfWYsnWhENRMWuSHrW",
        },
      }
    );
    let data = await response.json();
    setData(data.genres);
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div>
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
    </div>
  );
}

export default Categories;
