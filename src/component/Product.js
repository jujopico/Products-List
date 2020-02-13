import React from 'react';

class Product extends React.Component {
  render(){
    const {color, department, productName, price, productAdjective, productMaterial, product} = this.props.details
    return(
      <tr className="productsTable">
        <td>{color}</td>
        <td>{department}</td>
        <td>{productName}</td>
        <td>{price}</td>
        <td>{productAdjective}</td>
        <td>{productMaterial}</td>
        <td>{product}</td>
      </tr>
    ) 
  }
}

export default Product;