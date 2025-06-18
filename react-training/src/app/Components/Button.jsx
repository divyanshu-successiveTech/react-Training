'use client'

const Button=({text,color})=>{

    return (
        <button onClick={(e)=>{
            e.target.innerHTML=text;
            e.target.style.backgroundColor = color;
        }}>Click</button>
    )

}

export default Button;