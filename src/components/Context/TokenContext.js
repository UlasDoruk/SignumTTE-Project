import { createContext, useState,useEffect} from "react";

const TokenContext = createContext()

// Authorization gelen token bilgisini burada componentlere dağıtıyoruz 

export function ShareToken({children}){

    const [token,setToken] = useState("")

    useEffect(() => {
      var autParameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          "grant_type=client_credentials&client_id=" +
          process.env.REACT_APP_SPOTIFY_CLIENT_ID +
          "&client_secret=" +
          process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      };
      fetch("https://accounts.spotify.com/api/token", autParameters)
        .then((result) => result.json())
        .then((data) => setToken(data.access_token));
    }, []);
    
    const values = {token,setToken}

    return(
        <TokenContext.Provider value={values}>
             {children}
        </TokenContext.Provider>
    )
}

export default TokenContext