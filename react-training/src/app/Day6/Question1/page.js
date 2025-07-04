// 1. Create a Next.js app using the App Router with multiple pages. Use next/dynamic to lazily load page components and improve initial load time.
//  Components should load only when their routes are visited.



import dynamic from "next/dynamic"
    
const Lazy = dynamic(()=>import("@/Components/Day6Components/LazyLoader"),{
    loading : ()=><p>Loading....</p>
})

function Question1(){

    return(
        <>
        {<Lazy/>}
        <p>Print here</p>        
        </>
    )
}

export default Question1