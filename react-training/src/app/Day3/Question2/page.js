import ConsumerWithTheme from "@/Components/Day3Components/ConsumerWithTheme";
import { LightLoginProvider } from "@/Components/Day3Components/LightLoginContext";

function Question2(){


    return(

    <LightLoginProvider>
        <ConsumerWithTheme />
    </LightLoginProvider>
    )

}


export default Question2;