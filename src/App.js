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
import BlueBlouse1 from "./Main/BlueBlouse1.jpg";
import WhiteBlouse1 from "./Main/WhiteBlouse1.jpg";
import StripePant1 from "./Main/StripePant1.jpg";
import style from "./Style"
// need to write code to reduce inventory for purchased stock

export default class App extends React.Component {
  state={
    cartItems: [{id: 0,
      item: {id:1, name: 'shirt', size: 'S', count: 1, price: 168.50}},
      {id: 1,
      item: {id:42, size: 'L', name: 'top', count: 1, price: 198.07}}
    ],
    inventory: [      {
      id: 1,
      name: "Silk Ruffle Blouse",
      price: "$168.00",
      image: `${BlueBlouse1}`,
      brand: "Ecru",
      sizes: [{id: 1, size: "S", count: 2},{id: 2, size: "M", count: 2},{id: 3, size: "L", count: 2}],
      description:'Description Sample'
    },
    {
      id: 2,
      name: "White Ruffle Blouse",
      price: "$194.00",
      image: `${WhiteBlouse1}`,
      brand: "Ecru",
      sizes: [{id: 1, size: "S", count: 2},{id: 2, size: "M", count: 2},{id: 3, size: "L", count: 2}],
      description:'Description Sample'
    },
    {
      id: 3,
      name: "Sport Stripe Regent Pants",
      price: "$180.00",
      image: `${StripePant1}`,
      brand: "Ecru",
      sizes: [{id: 1, size: "S", count: 2},{id: 2, size: "M", count: 2},{id: 3, size: "L", count: 2}],
      description:'Description Sample'
    },]
  }
  static contextType = ApiContext;

  handleDeleteItem=({target})=>{
    let newItems= this.state.cartItems.filter(function(cartItem){
        return cartItem.id !== parseInt(target.id)
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
        <Route path="/product/:id" component={Product}/>
        <Route path="/cart" component={Cart}/>
        </>
    );
  }
  render(){
    let cartTotal= this.state.cartItems.map((cartItem)=>(cartItem.item.count)).reduce((a,b)=>a+b,0)
    let cartTotalDollars= this.state.cartItems.map((cartItem)=>(cartItem.item.price)).reduce((a,b)=>a+b,0)
  console.log(style)
    return (
    <ApiContext.Provider
    value={{
      cartItems: this.state.cartItems,
      handleDeleteItem: this.handleDeleteItem,
      handleAddItem: this.handleAddItem,
      cartTotal: cartTotal,
      cartTotalDollars: cartTotalDollars,
      inventory:this.state.inventory
    }}
  >
    <div className="App">
      
      <TopMenu/>
      <p style={style.accentFont} className='Sales-Banner'>
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

