// 6.Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.

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