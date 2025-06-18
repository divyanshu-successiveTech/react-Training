const Weather =(props) =>{
    if(props.temp>25){
        return (<p> It's sunny today! </p>);

    }else if(props.temp<10){
        return (<p>It's cold today!</p>);
    }else{
        return (<p>Good Day</p>);
    }
}

export default Weather;