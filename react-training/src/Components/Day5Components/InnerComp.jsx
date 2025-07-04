import withDataFetcher from "./withDataFetcher";

function InnerComp(props){
    const arr= props.data;
    return(
        <>
        {arr.map((item)=><div>{JSON.stringify(item)}</div>)}
        
        </>
    )
}

export default withDataFetcher(InnerComp)