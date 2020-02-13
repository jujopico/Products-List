import React from 'react';
import sampleProducts from '../sample-products'
import Product from './Product'
import AddProductForm from './AddProductForm'

class App extends React.Component {
  state = {
    products: {}
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
    const products = {...this.state.products};
    products[`product{Date.now()}`] = product;
    this.setState({ products });
  }

  eidtProduct = (key, editedProduct) => {
    const products = {...this.state.products};
    products[key] = editedProduct;
    this.setState({ products });
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
                eidtProduct={this.editProduct}
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
