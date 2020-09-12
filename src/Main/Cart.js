import React from "react";
import {Link} from "react-router-dom"
import ApiContext from "../ApiContext"
import "./Cart.css"

class Cart extends React.Component {
    static contextType = ApiContext;

  render() {
    let items=this.context.cartItems
    let total=(this.context.cartTotalDollars).toFixed(2)
    return (
      <div className="Main">
          <h1 className="Title">
              Your Cart
          </h1>
            {items.map((item)=>(
                
                <div id={item.item.id} className="CartItem"  key={item.item.id} >
                  <div className='horizontal'>

                    <Link to={`/product/:${item.item.id}`}>
                    <div className='vertical'>

                <p>Product Name: {item.item.name}</p>
                </div>

                <p>Size: {item.item.size}</p>


                <p>${(item.item.price).toFixed(2)}</p>
                </Link>
                <button className="DeleteButton" id= {item.id} onClick={(e)=> this.context.handleDeleteItem(e)}>Delete</button>
                </div>
                </div>
                
            ))}
            <p>Your Total: ${total}</p>
                </div>
    );
  }
}

export default Cart;