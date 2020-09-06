import React from 'react';
import logo from "./My Post-4.jpg"
import MenuOptions from "./MenuOptions"
import { Link } from "react-router-dom";
import "./SideMenu.css"
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faShoppingCart,
)
class SideMenu extends React.Component{
render(){
    let list1=[{icon: faShoppingCart, name: 'Cart'}, {name: "Log in"}, {name: "Create Account"}]
    let list2=[{name: "New Arrivals"}, {name: "Female Founder"},{name:  "Boss Lady"},{name: "Trend Setter"},{name: "Lounge"}]
  return (
    <div className="SideMenu">
        <Link to='/'><img className='Logo' src={logo} alt='company-logo'/></Link>
        <MenuOptions list={list1}/>
        <p className='Accent'>____</p>
        <MenuOptions list={list2}/>
        <br/><br/><br/><br/>
    </div>
  );
}
}
export default SideMenu;