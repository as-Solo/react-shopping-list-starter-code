import ProductCard from "./ProductCard";

function ProductList(props) {
  const {allProducts, searchValue, setAllProducts} = props
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* //* the list of the products will be here */}
      {/* //* it will render a ProductCard for each product in the list */}
      {allProducts
      .filter((product)=> product.name.includes(searchValue))
      .map((eachProduct, index) => {
        return (
          <ProductCard setAllProducts={setAllProducts} allProducts= {allProducts} index={index} eachProduct={eachProduct} key={index}/>
        )
      })}
    </div>
  )
}

export default ProductList