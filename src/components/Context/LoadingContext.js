import {  createContext, useState } from "react";

 const LoadingContext = createContext()

// Loading bilgisini buradan componentlere dağıtıyoruz

export function ShowLoading({children}){

    const [loading,setLoading] = useState(false)

    const values = {loading,setLoading}

    return(
        <LoadingContext.Provider value={values}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext