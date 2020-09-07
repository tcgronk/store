import React from "react";
import { Link } from "react-router-dom";
import "./MenuOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiContext from "../ApiContext"

class MenuOptions extends React.Component {
  static contextType = ApiContext;
  render() {
    let lists = this.props.list;
    return (
      <div className="MenuOptions">
        <ul>
          {lists.map((list) => (
            <li key={list.name}>
                {list.icon || list.cart===false
                ?(<Link to={`/${list.name}`}>
                  <FontAwesomeIcon icon={list.icon}>{" "}</FontAwesomeIcon>
                  {" "}{list.name} 
                  {list.cart && this.context.cartTotal>0
                  ?(`${" "}(${this.context.cartTotal})`)
                  :null}</Link>)
                : (<Link to={`/products/${list.name}`}>{list.name}</Link>)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuOptions;
