// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

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