import React from 'react';
import sampleProducts from '../sample-products'
import Product from './Product'
import AddProductForm from './AddProductForm'

class App extends React.Component {
  state = {
    products: []
  }

  loadSampleProducts = () => {
    this.setState({ 
      products: sampleProducts
     })
  }

  componentDidMount(){
    this.loadSampleProducts()
  }

  addProduct = (product) => {
    const products = [...this.state.products];
    products[products.length] = product;
    this.setState({ products });
  }

  editProduct = (productName) => {
    let workingArray = this.state.products
    let itemToEdit = workingArray.find(item =>{
      return(
        item.productName === productName
      )
    })
    console.log(itemToEdit)
  }

  deleteProduct = (productName) => {
    let workingArray = this.state.products
    let itemToDelete = workingArray.find(item =>{
      return(
        item.productName === productName
      )
    })
      let indexToDelete = workingArray.indexOf(itemToDelete);
      workingArray.splice(indexToDelete, 1);
      this.setState({products:[...workingArray]});
   }
  

  render(){
    return(
      <div className="productsWraper">
        <div className="productsList">
        <h1>Products List</h1>
          <ul className="products">
            {Object.keys(this.state.products).map(key => (
              <Product
                key={key}
                index={key}
                details={this.state.products[key]}
                deleteProduct={this.deleteProduct}
                editProduct={this.editProduct}
              />
            ))}
          </ul>
          <h1>Add A New Product</h1>
          <AddProductForm
            addProduct={this.addProduct}
          />
        </div>
      </div>
    )
  }
}

export default App;
