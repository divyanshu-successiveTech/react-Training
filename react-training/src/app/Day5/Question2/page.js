// 2. Extend your Next.js component that fetches data from a public API (https://jsonplaceholder.typicode.com/users)
//     using server-side rendering (SSR) with the App Router to handle errors gracefully. If the fetch request fails during SSR, 
//     display a user-friendly error message on the page. 
//     Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.

import FetchData from "@/Components/Day5Components/FetchData";
import FetchInAnother from "@/Components/Day5Components/FetchInAnother";

function Question2(){
    return(
        <>
        
        <FetchInAnother/>
        
        </>
    )

}
export default Question2;