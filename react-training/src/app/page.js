import Greeting from "./Components/Greeting";
import UserCard from "./Components/UserCard";
import Weather from "./Components/Weather";
import Counter from "./Components/Counter";
import TaskList from "./Components/TaskList";
import Button from "./Components/Button";


export default function Home() {

  let list=["Hello","This","Is","The","Array"];
  return (
    
  <div>
    <h3>Day-1</h3>
    <Greeting /> 

    <UserCard name="Divyanshu" email="abc@gmail.com" image="./trial.png" />

    <Weather temp= {26} ></Weather>
    <Weather temp= {9} ></Weather>
    <Weather temp= {20} ></Weather>

    <Counter></Counter>

    <TaskList list= {list}></TaskList>

    <Button text="Hello" color="red"></Button>

  </div>
   

  );

}
