// import { useState } from "react"

function SearchBar(props) {

  // const {allProducts} = props
  // const {setAllProducts} = props
  const {searchValue, setSearchValue} = props
  

  const handleSearchValue = (event) =>{
    setSearchValue(event.target.value)
  //   //! nunca vamos a tener acceso a este nuevo valor del estado dentro del scope
  //   //* por eso an la siguiente linea tenemos   ue poner event.target.value

  // const filteredProducts = allProducts.filter((product)=> product.name.includes(event.target.value))

  // setAllProducts(filteredProducts)
  }


  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input onChange={handleSearchValue} value={searchValue} type="text"/>

    </div>
  )
}

export default SearchBar