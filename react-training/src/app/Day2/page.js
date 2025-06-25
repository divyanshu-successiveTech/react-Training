'use client'
import CounterClick from "@/Components/Day2Components/CounterClick"
import PersonForm from "@/Components/Day2Components/PersonForm"
import RandomNumberGenerator from "@/Components/Day2Components/RandomNumberGenerator"
import ToDoList from "@/Components/Day2Components/ToDoList"
import StepCountChange from "@/Components/Day2Components/StepCountChange"
import Clock from "@/Components/Day2Components/Clock"
import Notification from "@/Components/Day2Components/Notification"
import Slide from "@/Components/Day2Components/Slide"
import { ThemeProvider } from "@/Components/Day2Components/ThemeContext"
import TrialButton from "@/Components/Day2Components/TrialButton"
import Voting from "@/Components/Day2Components/Voting"
import { LanguageProvider } from "@/Components/Day2Components/LanguageContext"
import { LanguageButton } from "@/Components/Day2Components/LanguageButton"
import ChangeCount from "@/Components/Day2Components/ChangeCount"
import CompleteTasks from "@/Components/Day2Components/CompleteTasks"
import { StudentList } from "@/Components/Day2Components/StudentList"
import EmployeeSalary from "@/Components/Day2Components/EmployeeSalary"
import Copied from "@/Components/Clipboard/Copied"
import { Local } from "@/Components/LocalStorage/app"
import { Countdown } from "@/Components/Timer/Countdown"

import { useRouter } from "next/navigation";

export default function Day2(){


    let router = useRouter();

    return (
        <>
        <button onClick={()=>router.push('/Day2/Question1')}>Question 1</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question2')}>Question 2</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question3')}>Question 3</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question4')}>Question 4</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question5')}>Question 5</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question6')}>Question 6</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question7')}>Question 7</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question8')}>Question 8</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question9')}>Question 9</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question10')}>Question 10</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question11')}>Question 11</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question12')}>Question 12</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question13')}>Question 13</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question14')}>Question 14</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question15')}>Question 15</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question16')}>Question 16</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question17')}>Question 17</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question18')}>Question 18</button><br></br><br></br>
        <button onClick={()=>router.push('/Day2/Question19')}>Question 19</button><br></br><br></br>

        </>



    )

}