function AddElement({curr}){
    return(<li>{curr}</li>)
}


const TaskList =({list})=>{

    let arr = list.map((ele)=>< AddElement curr = {ele} />)
    return(
        <div><ol>{arr}</ol></div>
    )
    
}

export default TaskList;