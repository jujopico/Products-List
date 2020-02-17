import React from 'react';

class AddProductForm extends React.Component {
  state = {
      color: "",
      department: "",
      productName: "",
      price: "",
      productAdjective: "",
      productMaterial: "",
      product: ""
  }

  createProduct = (event) => {
    event.preventDefault()
    const { currentProducts, updateProducts } = this.props;
    const productToAdd = this.state
    const existingProductIndex = currentProducts.findIndex(({ productName }) => productName === productToAdd.productName);
    const isDuplicate = existingProductIndex !== -1;
    const newProducts = isDuplicate 
      ? Object.assign(currentProducts, { [existingProductIndex]: productToAdd })
      : [...currentProducts, productToAdd];
    updateProducts(newProducts);
  }

  componentDidUpdate(prevProps) {
    if(this.props.productToEdit !== prevProps.productToEdit) 
    {
      this.setState({...this.props.productToEdit})
    }
  } 

  render(){
    return(
        <div className="addProductform">
          <form onSubmit={this.createProduct}>
            <input 
              name="color" 
              value={this.state.color}
              onChange={(e)=>this.setState({color:e.target.value})} 
              type="text" 
              placeholder="Color" 
              required 
            />
            <input 
              name="department" 
              value={this.state.department}
              onChange={(e)=>this.setState({department:e.target.value})} 
              type="text" 
              placeholder="Department" 
              required 
            />
            <input 
              name="productName" 
              value={this.state.productName}
              onChange={(e)=>this.setState({productName:e.target.value})} 
              type="text" 
              placeholder="Product Name" 
              required 
            />
            <input 
              name="price"
              value={this.state.price}
              onChange={(e)=>this.setState({price:e.target.value})} 
              type="number" 
              placeholder="Price" 
              required 
            />
            <input 
              name="productAdjective" 
              value={this.state.productAdjective}
              onChange={(e)=>this.setState({productAdjective:e.target.value})} 
              type="text" 
              placeholder="Product Adjective" 
              required  
            />
            <input 
              name="productMaterial" 
              value={this.state.productMaterial}
              onChange={(e)=>this.setState({productMaterial:e.target.value})} 
              type="text" 
              placeholder="Product Material" 
              required     
            />
            <input 
              name="product" 
              value={this.state.product}
              onChange={(e)=>this.setState({product:e.target.value})} 
              type="text" 
              placeholder="Product" 
              required      
            />
            <button 
              type="submit" 
              className="add-btn">
              Submit
            </button>
          </form>
        </div>
    )
  }
}

export default AddProductForm;