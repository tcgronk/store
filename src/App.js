import React from "react";
import { Route } from "react-router-dom";
import SideMenu from './Side-Menu/SideMenu'
import TopMenu from "./TopMenu/TopMenu"
import Main from "./Main/Main"
import './App.css';
import Footer from "./Main/Footer";
import Product from "./Main/Product"
import Products from "./Main/Products"
import Cart from "./Main/Cart"
import ApiContext from "./ApiContext"

// need to write code to reduce inventory for purchased stock

export default class App extends React.Component {
  state={
    cartItems: [{id: 0,
      item: {id:1, name: 'shirt', size: 'S', count: 1}},
      {id: 1,
      item: {id:42, size: 'L', name: 'top', count: 1}}
    ],
    
  }
  static contextType = ApiContext;

  handleDeleteItem=({target})=>{
    console.log(target)
    console.log(this.state.cartItems)
    let newItems= this.state.cartItems.filter(function(cartItem){
        return cartItem.id != target.id
    })
    this.setState({cartItems: newItems})
}
  handleAddItem=(item)=>{
    let cartItem= {id: this.state.cartItems.length, item: item}
    this.setState({cartItems:[...this.state.cartItems,
      cartItem]})
  }

  renderMainRoutes() {
    return (<>
        <Route exact path="/" component={Main} />
        <Route path="/products/:filter" component={Products}/>
        <Route path="/product" component={Product}/>
        <Route path="/cart" component={Cart}/>
        </>
    );
  }
  render(){
    let cartTotal= this.state.cartItems.map((cartItem)=>(cartItem.item.count)).reduce((a,b)=>a+b,0)
    
  return (
    <ApiContext.Provider
    value={{
      cartItems: this.state.cartItems,
      handleDeleteItem: this.handleDeleteItem,
      handleAddItem: this.handleAddItem,
      cartTotal: cartTotal
    }}
  >
    <div className="App">
      
      <TopMenu/>
      <p className='Sales-Banner'>
        Free Shipping on all sales!
      </p>
      <div className='Outline'>
      <SideMenu/>
      </div>
      <span>{this.renderMainRoutes()}</span>
      <Footer/>

    </div>
    </ApiContext.Provider>
  );
}
}

