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

  render(){
    return(
      <div>
      <h1>Show the Products!</h1>
        <ul>
          {Object.keys(this.state.products).map(key => (
            <Product
              key={key}
              details={this.state.products[key]}
            />
          ))}
        </ul>
        <AddProductForm
          addProduct={this.addProduct}
        />
      </div>
    )
  }
}

export default App;
