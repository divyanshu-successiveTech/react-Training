// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

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