import React from 'react';
import logo from "./My Post-4.jpg"
import MenuOptions from "./MenuOptions"
import { Link } from "react-router-dom";
import "./SideMenu.css"

class SideMenu extends React.Component{
render(){
    let list1=["Cart", "Log in", "Create Account"]
    let list2=["New Arrivals", "Female Founder", "Boss Lady","Trend Setter","Lounge"]
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