import { createContext, useState } from "react";

const TokenContext = createContext()

export function ShareToken({children}){

    const [token,setToken] = useState("")
    
    const values = {token,setToken}

    return(
        <TokenContext.Provider value={values}>
             {children}
        </TokenContext.Provider>
    )
}

export default TokenContext