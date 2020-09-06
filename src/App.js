import React from "react";
import { Route, Switch } from "react-router-dom";
import SideMenu from './Side-Menu/SideMenu'
import TopMenu from "./TopMenu/TopMenu"
import Main from "./Main/Main"
import './App.css';
import Footer from "./Main/Footer";
import Product from "./Main/Product"

export default class App extends React.Component {
  renderMainRoutes() {
    return (<>
        <Route exact path="/" component={Main} />
        <Route path="/products" component={Product}/>
        </>
    );
  }
  render(){
  return (
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
  );
}
}

