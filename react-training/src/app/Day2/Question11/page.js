import { ShoppingCart } from "@/Components/Day2Components/ShoppingCart";
import { ShoppingCartProvider } from "@/Components/Day2Components/ShoppingCartContext";

export default function Question11(){
    return (
        <>
        <h4>Question11</h4>
        <ShoppingCartProvider>
            <ShoppingCart/>
        </ShoppingCartProvider>
        
        </>
        
    )
}