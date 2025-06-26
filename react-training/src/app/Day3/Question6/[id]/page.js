import { ShowDetails } from "@/Components/Day3Components/showDetails";

function id({params}){

    
    const{id}= params;

    return(
        <ShowDetails id = {id}/>
    )




}
export default id;