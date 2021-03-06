import React from "react";
import{Link} from "react-router-dom"
import "./InventoryPreview.css"

class InventoryPreview extends React.Component {
  state={
    load:false
  }  
  photo(){
     this.setState({load: true})
  }

  //  myFunction=()=> {
    
  //   setTimeout(function(){this.photo()},10000)
  // }

  render() {
      let lists=this.props.list
    return (
      <div className="InventoryPreview" >
        <div className="container">
        {lists.map((list) => (
          <Link to={`/product/:${list.id}`} key={list.id} >
            <div >
              <img className="ProductPreview" src={list.image} alt="inventory-preview" /> 
            <h2>{list.name}</h2>
            <h3>{list.price}</h3>
        </div>
        </Link>
        ))}
</div>
      </div>
    );
  }
}

export default InventoryPreview;
