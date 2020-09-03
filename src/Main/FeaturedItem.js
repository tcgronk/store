import React from "react";
import "./FeaturedItem.css"


class FeaturedItem extends React.Component {
  render() {
      let item=this.props.item
      let sizes=this.props.item.sizes
    return (
      <div className="FeaturedItem">
          <div className="FeaturedItem-Preview">
            <img className="FeaturedPreviewPhoto" src={item.image} alt="featured-preview" /> 
            <div>
            <h2>{item.name}</h2>
            <h4>{item.brand}</h4>
            <p className='Accent'>____</p>
            <h3>{item.price}</h3>
            <select>
                {sizes.map((size)=>(
                    <>
                    {size.count > 0
                    ? <option>{size.size}</option>
                    :null
                    }
                    </>
                ))}
            </select>
            </div>
            </div>
        </div>
    );
  }
}

export default FeaturedItem;