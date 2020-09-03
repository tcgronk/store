import React from "react";
import "./InventoryPreview.css"

class InventoryPreview extends React.Component {
  render() {
      let lists=this.props.list
    return (
      <div className="InventoryPreview">

        {lists.map((list) => (
            <div key={list.id}>
            <img className="ProductPreview" src={list.image} alt="inventory-preview" /> 
            <h2>{list.name}</h2>
            <h3>{list.price}</h3>
        </div>
        ))}

      </div>
    );
  }
}

export default InventoryPreview;
