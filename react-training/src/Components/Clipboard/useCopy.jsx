const { useState } = require("react")

const useCopy =()=>{
    const [status,setStaus]=useState('Copy');

    const copy=(value)=>{
        
        let element= document.createElement("textarea");
        element.innerText=value;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        setStaus('copied');
    
    }

    return {copy,status};
}

export default useCopy;