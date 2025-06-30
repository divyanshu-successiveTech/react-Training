'use client'
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  return (
  <>
    <h1>HomePage</h1>

    <h3>Here are the link to all the questions according to Day</h3>

    <button onClick={()=> router.push('/Day1')}>To Day-1</button><br/><br/>
  
  </>
 

  );

}
