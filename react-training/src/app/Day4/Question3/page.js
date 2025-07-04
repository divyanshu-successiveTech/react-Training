// 3.Create a component with controlled input field and a button. When the user enters a specific
//  value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, 
// nothing should be displayed.


const { default: RenderComp } = require("@/Components/Day4Components/RenderComp");

function Question3(){
    return(
        <>
            <RenderComp/>
        </>
    )
}

export default Question3;