'use client'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
  <>
    <h1>HomePage</h1>

    <h3>Here are the link to all the questions according to Day</h3>

    <button onClick={()=> router.push('/Day1')}>To Day-1</button><br/><br/>
    <button onClick={()=> router.push('/Day2')}>To Day-2</button><br/><br/>

    <button onClick={()=> router.push('/Day3')}>To Day-3</button><br/><br/>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> develop
<<<<<<< HEAD

    <button onClick={()=> router.push('/Day4')}>To Day-4</button><br/><br/>
    <button onClick={()=> router.push('/Day5')}>To Day-5</button><br/><br/>
    <button onClick={()=> router.push('/Day6')}>To Day-6</button><br/><br/>
=======
<<<<<<< HEAD
=======
=======
>>>>>>> develop
>>>>>>> develop
=======
>>>>>>> develop
    <button onClick={()=> router.push('/Day4')}>To Day-4</button><br/><br/>
>>>>>>> develop

<<<<<<< HEAD
=======
>>>>>>> develop
>>>>>>> develop
  
  </>
 

  );

}
