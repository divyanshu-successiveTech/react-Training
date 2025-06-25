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