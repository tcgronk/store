import React from "react";
import { Link } from "react-router-dom";
import "./MenuOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MenuOptions extends React.Component {
  render() {
    let lists = this.props.list;
    console.log(lists)
    return (
      <div className="MenuOptions">
        <ul>
          {lists.map((list) => (
            <li key={list.name}>
              <Link to={list.name}><FontAwesomeIcon icon={list.icon}></FontAwesomeIcon> {list.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuOptions;
