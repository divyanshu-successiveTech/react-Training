import products from "./ProductList";

export const ShowDetails=({id})=>{

        let curr = products[id-1];


    return(
        <>
        Name:{curr.name}<br/>
        Description : {curr.description}
        </>
    )

}