import Consumer from "@/Components/Day3Components/Consumer";
import { ParentProvider } from "@/Components/Day3Components/ParentContext";

function Question1(){


    return(

    <ParentProvider>
        <Consumer/>
    </ParentProvider>
    )

}


export default Question1;