const useLocalStorage = () =>{

    const setter =(key,value)=>{
        localStorage.setItem(`${key}`,`${value}`);
    }

    const getter = (value)=>{
        let ele=localStorage.getItem(`${value}`)
        console.log(ele);
        return !ele?"no such item" : ele;
    }

    const remove = (value)=>{
        localStorage.removeItem(value)
    }

    return {setter,getter,remove};
}

export default useLocalStorage;