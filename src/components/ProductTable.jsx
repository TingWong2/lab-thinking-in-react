import ProductRow from "./ProductRow";
import ProductsPage from "./ProductsPage";

function ProductTable(props) {
    const { products } = props
    console.log('>>>> products', products)

    return (

        <div>

            <table className="productTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product)=>{return(
                    <ProductRow key={product.id}
                        name={product.name}
                        inStock={product.inStock}
                        price={product.price}/> 
                
                )})}
                    
                </tbody>
            </table>


        </div>

    )
}
export default ProductTable;
