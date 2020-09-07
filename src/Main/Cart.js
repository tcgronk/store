import React from "react";
import ApiContext from "../ApiContext"

class Cart extends React.Component {

    static contextType = ApiContext;

  render() {

    let items=this.context.cartItems
    return (
      <div className="Main">
          <h1 className="Title">
              Cart
          </h1>
          <h2>Items:</h2>
            {items.map((item)=>(
                <p id={item.item.id}>
                <p>Product Name: {item.item.name}</p>
                <p>Size: {item.item.size}</p>
                <p >{item.item.count}</p>
                <button id= {item.id} onClick={(e)=> this.context.handleDeleteItem(e)}>Delete</button>
                </p>
            ))}
                </div>
    );
  }
}

export default Cart;