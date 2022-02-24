import { useState } from "react";
import dataJason from "../data.json"
import AddProduct from "./AddProduct";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage (props) {
    const [products, setProducts] = useState(dataJason)
    console.log('<<<products>>>', products)
    const [productData, setProductData] = useState("")
    

    const filteredProductList = (str) => {
        const filterProduct = productData.filter((product)=>{
        return product.name[0].toLowerCase() === str.toLowerCase();
    })
    console.log("<<<<filterProduct", filterProduct)
    setProducts(filterProduct)
    } 
    
    const addNewProductList = (newProduct) =>{
        const updateProductList = [...productData, newProduct]
        const updateProduct = [...products, newProduct]

        setProductData(updateProductList); 
        setProducts(updateProduct)

    }
       
   

    return (
        <div>
            <h1>IronStore</h1>
        <SearchBar filterProduct={filteredProductList}/>
      
        <ProductTable products={products}/>

        <AddProduct addProduct={addNewProductList}/>
        
     
            

        </div>
    )
}

export default ProductsPage;