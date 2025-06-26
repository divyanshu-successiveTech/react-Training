"use client"
import products from "@/Components/Day3Components/ProductList";
import Link from "next/link";

function Question6(){

    return(
        
        <ul>
            {products.map((item)=>{
                

                return(
                    <h3><Link href= {`./Question6/${item.id}`}>{item.name}</Link> </h3>

                )  
            })}
        </ul>   
        
    )

}

export default Question6;