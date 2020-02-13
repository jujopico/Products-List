import React from 'react';

class AddProductForm extends React.Component {
  colorRef = React.createRef();
  descRef = React.createRef();
  productNameRef = React.createRef();
  priceRef = React.createRef();
  productAdjectiveRef = React.createRef();
  productMaterialRef = React.createRef();
  productRef = React.createRef();

  createProduct = (event) => {
    event.preventDefault();
    const Product = {
      color: this.colorRef.current.value,
      department: this.departmentRef.current.value,
      productName: this.productNameRef.current.value,
      price: parseFloat(this.statusRef.current.value),
      productAdjective: this.productAdjective.current.value,
      productMaterial: this.productMaterial.current.value,
      product: this.product.current.value
    }
    this.props.addProduct(Product);
  }

  render(){
    return(
      <form onSubmit={this.createProduct}>
        <input name="color" ref={this.colorRef} type="text" placeholder="color" required />
        <input name="department" ref={this.departmentRef} type="text" placeholder="department" required />
        <input name="productName" ref={this.productNameRef} type="text" placeholder="productName" required />
        <input name="price" ref={this.priceRef} type="text" placeholder="price" required />
        <input name="productAdjective" ref={this.productAdjectiveRef} type="text" placeholder="productAdjective" required />
        <input name="productMaterial" ref={this.productMaterialRef} type="text" placeholder="productMaterial" required />
        <input name="product" ref={this.productRef} type="text" placeholder="product" required />
        <button type="submit">Add A Product</button>
      </form>
    )
  }
}

export default AddProductForm;