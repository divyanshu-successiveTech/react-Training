// 1. Create a Next.js component using the App Router that fetches data on the server side (SSR) 
// from a public API (e.g., JSONPlaceholder) and displays the results on the page.



import FetchData from "@/Components/Day5Components/FetchData";

function Question1(){

    return(

        <>
        <FetchData/>
        
        </>
    )
}

export default Question1;