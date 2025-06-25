import { ThemeProvider } from "@/Components/Day2Components/ThemeContext"
import TrialButton from "@/Components/Day2Components/TrialButton"

export default function Question9(){
    return (
        <>
        <h4>Question9</h4>
        <ThemeProvider>
            <h1>This is the text</h1>
            <TrialButton />
        </ThemeProvider>
        </>
        
    )
}