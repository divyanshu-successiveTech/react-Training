// 16. Create a higher-order component (HOC) named withDataFetching where the data fetching happens in a Server Component using SSR. 
// The fetched data should then be passed as props to a Client Component wrapped by the HOC, which displays the data.

import InnerComp from "@/Components/Day5Components/InnerComp"

function Question16(){
    return(
        <>
        <InnerComp/>
        
        </>
    )
}

export default Question16