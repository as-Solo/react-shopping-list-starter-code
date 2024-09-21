
function ProductCard(props) {
  const {setAllProducts, eachProduct, index} = props;
  // console.log(props)
  const handlerBuy = ()=>{

    console.log("Intendo comprar", index)

    setAllProducts((current)=>{
      console.log(current)
      const copia = structuredClone(current)
      // const elemento = copia.find((elem)=>elem.index === index)
      copia[index].isPurchased = true
      return copia
    })
  }
  return (
    <div className="product-card">
      <h3>{eachProduct.name}</h3>
      <p>{eachProduct.price}€</p>
      <p>{eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handlerBuy}>Buy</button>
    </div>
  )
}

export default ProductCard