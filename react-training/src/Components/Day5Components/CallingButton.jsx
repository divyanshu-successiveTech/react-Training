"use client"



const { default: ButtonComponent } = require("./ButtonComponent");

function CallingButton(){

    function handleClick(){
        console.log("Hello")
    }
    return(
        <ButtonComponent variant ="primary" text="Sample Button" handleClick={handleClick}/>
    )
}

export default CallingButton;