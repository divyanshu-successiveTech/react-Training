"use client"


const { createContext, useState } = require("react");

export const ValidationContext = createContext();

export const ValidationProvider = ({children}) =>{


    let [flag,setFlag] = useState(false);


    function validate(user,pass){

        if(user==="ABC" && pass === "111" ){
            setFlag(true);
        }
    }


    return(
        <ValidationContext.Provider value ={{flag,setFlag,validate}}>
            {children}
        </ValidationContext.Provider>


    )
}