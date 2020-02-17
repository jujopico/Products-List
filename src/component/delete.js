deleteProduct = (productName) => {
  let itemToDelete = this.state.products.find(item =>{
    return(
      item.productName === productName
    )
​
  })
    let indexToDelete = this.state.products.indexOf(itemToDelete)
    let newProductsList = this.state.products.splice(indexToDelete, 1)
    this.setState([...newProductsList])
 }


 {Object.keys(this.state.products).map(key => (
  <Product
    key={key}
    index={key}
    details={this.state.products[key]}
    deleteProduct={this.deleteProduct}
  />
))}

<td className="delete-btn" onClick={()=> this.props.deleteProduct(productName)}><button>Delete</button></td>