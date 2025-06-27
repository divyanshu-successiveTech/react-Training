// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

import { LanguageProvider } from "@/Components/Day2Components/LanguageContext"
import { LanguageButton } from "@/Components/Day2Components/LanguageButton"
export default function Question10(){
    return (
        <>
        <h4>Question10</h4>
        <LanguageProvider>
            <LanguageButton text ="This is the sample text" ></LanguageButton>
        </LanguageProvider>
        </>
        
    )
}