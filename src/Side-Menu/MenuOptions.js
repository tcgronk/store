import React from "react";
import { Link } from "react-router-dom";
import "./MenuOptions.css";

class MenuOptions extends React.Component {
  render() {
    let lists = this.props.list;
    return (
      <div className="MenuOptions">
        <ul>
          {lists.map((list) => (
            <li key={list}>
              <Link to={list}>{list}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuOptions;
