'use client'

import { useRouter } from "next/navigation";


export default function Day1(){

  const router = useRouter();

  return (
    
  <>

    <h1>Buttons for each Question</h1>

    <button onClick={() => router.push('/Day1/Question1')}>To Question-1</button><br/><br/>
    <button onClick={() => router.push('/Day1/Question2')}>To Question-2</button><br/><br/>
    <button onClick={() => router.push('/Day1/Question3')}>To Question-3</button><br/><br/>
    <button onClick={() => router.push('/Day1/Question4')}>To Question-4</button><br/><br/>
    <button onClick={() => router.push('/Day1/Question5')}>To Question-5</button><br/><br/>
    <button onClick={() => router.push('/Day1/Question6')}>To Question-6</button><br/><br/>

  </>
   

  );

}
