import React from "react";
import ApiContext from "../ApiContext"
import FeaturedItem from './FeaturedItem'

class Product extends React.Component {
    static contextType = ApiContext;

  render() {
    let id= parseInt(this.props.match.params.id.slice(1))
    let product=this.context.inventory.filter((invent)=>invent.id===id)
    console.log(product)
    return (
      <div className="Main">
          {/* <h2>{product[0].name}</h2>
          <img className="Product" src={product[0].image} alt="inventory" /> 
            <h3>{product[0].price}</h3>
            <button onClick={()=>this.context.handleAddItem()}></button> */}
            <FeaturedItem item={product} full={true}/>
    </div>

    );
  }
}

export default Product;