import React from 'react';
import sampleProducts from '../sample-products'
import Product from './Product'
import AddProductForm from './AddProductForm'

class App extends React.Component {
  state = {
    products: [],
    itemToEdit: {}
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

  updateProducts = (products) => this.setState({ products })

  editProduct = (productName) => {
    const currentProductArray = this.state.products;
    const productToEdit = currentProductArray.find(product =>{
      return(
        product.productName === productName
      )
    })
    this.setState({ productToEdit: {...productToEdit} })
  }

  deleteProduct = (productName) => {
    const currentProductArray = this.state.products
    const itemToDelete = currentProductArray.find(item =>{
      return(
        item.productName === productName
      )
    })
      const indexToDelete = currentProductArray.indexOf(itemToDelete);
      currentProductArray.splice(indexToDelete, 1);
      this.setState({ products: [...currentProductArray] });
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
          <h1>Add/Update A New Product</h1>
          <AddProductForm
            addProduct={this.addProduct}
            productToEdit={this.state.productToEdit}
            currentProducts={this.state.products}
            updateProducts={this.updateProducts}
          />
        </div>
      </div>
    )
  }
}

export default App;
