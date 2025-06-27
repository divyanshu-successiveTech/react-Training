// 3.creat pages: Home and About.
// Implement file routing.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

import { Home } from "@/app/Day3/Question3/Home/page";
import Link from "next/link";



function Question3(){

    


    return(
        <Link href = "Question3/Home">To Home</Link>
    )

}


export default Question3;