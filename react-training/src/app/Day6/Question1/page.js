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