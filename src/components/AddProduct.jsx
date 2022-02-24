import { useState } from "react"

function AddProduct (props) {

    const [name, setName] = useState(""); 
    const [price, setPrice] = useState(0);
    const [inStock, setInStock] = useState(true)
   
    

    const handleNameInput = e => setName(e.target.value); 
    const handlePriceInput =  e => setPrice(e.target.value)
    const handleInStockInput = e => setInStock(e.target.checked)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct =  {name, price}
        console.log('¨¨¨newProduct', newProduct)
        props.addProduct(newProduct)
        //reset the state
        setName("")
        setPrice(0)

    }

    return (
        <div className="addProduct">

        <h2>Add product</h2> 
        <form onSubmit={handleSubmit}>
        <label classMame= "lb-tag" htmlFor="name">Name :</label>       
        <input className="inp" type="text" name="name"value={name} onChange={handleNameInput } />

        <label  classMame= "lb-tag" htmlFor="price">Price :</label>
        <input className="inp"type="text" name= "price" value={price} onChange={handlePriceInput}/>

        <label  classMame= "lb-tag" htmlFor="inStock">In Stock?</label>
        <input className="inp" type="checkbox" name="inStock" checked={inStock} onChange={handleInStockInput} />
        <button type="submit">Add product</button>
        </form>
        </div>
    )
}

export default AddProduct