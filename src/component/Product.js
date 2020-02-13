import React from 'react';

class Product extends React.Component {
  render(){
    const {color, department, productName, price, productAdjective, productMaterial, product} = this.props.details
    return(
      <li>
      <h3>{color}</h3>
      <h3>{department}</h3>
      <h3>{productName}</h3>
      <h3>{price}</h3>
      <h3>{productAdjective}</h3>
      <h3>{productMaterial}</h3>
      <h3>{product}</h3>
    </li>
    )
  }
}

export default Product;