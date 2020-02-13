import React from 'react';
import sampleProducts from '../sample-products'
import Product from './Product'
import AddProductForm from './AddProductForm'

class App extends React.Component {
  state = {
    Products: {}
  }

  loadSampleProducts = () => {
    this.setState({ 
      Products: sampleProducts
     })
  }

  componentDidMount(){
    this.loadSampleProducts()
  }

  addProduct = (Product) => {
    const Products = {...this.state.Products};
    Products[`Product{Date.now()}`] = Product;
    this.setState({ Products });
  }

  render(){
    return(
      <div>
      <h1>Show the Products!</h1>
        <ul>
          {Object.keys(this.state.Products).map(key => (
            <Product
              key={key}
              details={this.state.Products[key]}
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
