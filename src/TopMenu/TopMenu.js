import React from 'react';
import logo from "../Side-Menu/My Post-4.jpg"
import { Link } from "react-router-dom";
import "./TopMenu.css"
import ApiContext from "../ApiContext"

class TopMenu extends React.Component{
    static contextType = ApiContext;

render(){
    // let list1=["Cart", "Log in", "Create Account"]
    // let list2=["New Arrivals", "Female Founder", "Boss Lady","Trend Setter","Lounge"]
  return (
    <div className="TopMenu">
        <Link to='/menu'>Menu</Link>
        <Link to='/'><img className='TopLogo' src={logo} alt='company-logo'/></Link>
        <Link to="/cart">Cart ({this.context.cartTotal})</Link>
    </div>
  );
}
}
export default TopMenu;