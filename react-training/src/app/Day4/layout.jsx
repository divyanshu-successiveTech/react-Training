import DenseAppBar from "@/Components/Day4Components/NavBar"

export default function Layout({children}){
    return(

        <>
        <DenseAppBar />
        {children}
        
        </>
        
    )
}