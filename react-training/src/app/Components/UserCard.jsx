const userCard =(props)=>{

    return (

        <div>
            <p>{props.name} <br/>{props.email}<br/> <img src = {props.image}></img></p>
            
        </div>

    )


}

export default userCard;