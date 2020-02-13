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
    const product = {
      color: this.colorRef.current.value,
      department: this.departmentRef.current.value,
      productName: this.productNameRef.current.value,
      price: parseFloat(this.statusRef.current.value),
      productAdjective: this.productAdjective.current.value,
      productMaterial: this.productMaterial.current.value,
      product: this.product.current.value
    }
    this.props.addProduct(product);
  }

  render(){
    return(
        <div className="addProductform">
          <form onSubmit={this.createProduct}>
            <input name="color" ref={this.colorRef} type="text" placeholder="Color" required />
            <input name="department" ref={this.departmentRef} type="text" placeholder="Department" required />
            <input name="productName" ref={this.productNameRef} type="text" placeholder="Product Name" required />
            <input name="price" ref={this.priceRef} type="number" placeholder="Price" required />
            <input name="productAdjective" ref={this.productAdjectiveRef} type="text" placeholder="Product Adjective" required />
            <input name="productMaterial" ref={this.productMaterialRef} type="text" placeholder="Product Material" required />
            <input name="product" ref={this.productRef} type="text" placeholder="Product" required />
            <button type="submit" className="add-btn">+ Add A Product</button>
        </form>
        </div>
    )
  }
}

export default AddProductForm;