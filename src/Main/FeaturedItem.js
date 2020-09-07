import React from "react";
import "./FeaturedItem.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiContext from '../ApiContext'

import {
    faLongArrowAltRight
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  library.add(
    faLongArrowAltRight
  )
// import Zoom from "react-img-zoom"

class FeaturedItem extends React.Component {
    static contextType = ApiContext; 
    state={
        item:{id: this.props.item.id,
        name: this.props.item.name,
        size: 'S',
        count: 1}
    }
    handleInputChange=(e)=>{
        let newItem=this.state.item
        newItem.size=e.target.value
        this.setState({item: newItem })
    }
    handleAddFeaturedItem=(e)=>{
        e.preventDefault();
        console.log(this.state.item)
        this.context.handleAddItem(this.state.item)
    }
  render() {
      let item=this.props.item
      let sizes=this.props.item.sizes
    return (
      <div className="FeaturedItem">
          <div className="FeaturedItem-Preview" >
                <img  className="FeaturedPreviewPhoto" src={item.image} alt="featured-preview" /> 
            <div>

            <h2>{item.name}</h2>
            <h4>{item.brand}</h4>
            <p className='Accent'>____</p>
            <h3>{item.price}</h3>
            <form className='form'>
            <select 
            value={this.state.item.size}
            onChange={(e)=>this.handleInputChange(e)}>
                {sizes.map((size)=>(
                    <option key={size.id}>
                    {size.count > 0
                    ? size.size
                    :null
                    }
                    </option>
                ))}
            </select>
            <br/>
            <button id={item.id} onClick={(e)=>this.handleAddFeaturedItem(e)}>Add to Cart</button>
            </form>
            <br/>
            <Link to={`/product/:${item.id}`}> See Full Details <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon></Link>
            </div>
            </div>
        </div>
    );
  }
}

export default FeaturedItem;