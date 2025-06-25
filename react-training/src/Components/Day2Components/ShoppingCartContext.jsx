'use client'
const { createContext ,useState } = require("react")

export const ShoppingCartContext = createContext()


export const ShoppingCartProvider =({children}) =>{

    const [products,setProducts] = useState([]);

    const addProduct=(product)=>{
        
        setProducts((prev)=>[...prev,product])
    }

    
    const removeProduct=(id)=>{

        let arr = products.filter((p)=>id!==p.id);

        setProducts([...arr]);
    }

    return (
        <ShoppingCartContext.Provider value ={{products,addProduct,removeProduct}}>
            {children}
        </ShoppingCartContext.Provider>
    )


}



