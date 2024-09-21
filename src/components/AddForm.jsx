import { useState } from "react"

function AddForm(props) {
  
  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue ] = useState(0)
  const [ placeholderName, setPlaceholderName] = useState("Inserta tu nombre")
  // const {allProducts} = props
  const {setAllProducts} = props


  const handleNameChange = (event)=>{
    let value = event.target.value
    if (value.toLowerCase() === "patata"){
      value = "Jorge"
    }
    setNameValue(value)
  }

  const handlePriceChange = (event)=>{
    setPriceValue(event.target.value)
  }

  const handleAddProduct = (event)=>{
    event.preventDefault()
    console.log("Add product")
    setPlaceholderName (nameValue);
    
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchase: false
    }
    setNameValue('')
    // console.log(newProduct)
    // const clone = [...allProducts]
    // clone.unshift(newProduct)
    // setAllProducts(clone)

    // // Forma "Avanzada"
    // setAllProducts((current)=>{
    //   const clone = [...current]
    //   clone.unshift(newProduct)
    //   return (clone)
    // })

    setAllProducts((current)=>[newProduct, ...current])
  }


  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleNameChange} type="text" name="name" value={nameValue} placeholder={placeholderName}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input onChange={handlePriceChange} type="number" name="price"/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm