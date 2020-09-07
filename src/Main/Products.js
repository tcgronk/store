import React from "react";
import InventoryPreview from "../Inventory/InventoryPreview";
import BlueBlouse1 from "./BlueBlouse1.jpg";
import WhiteBlouse1 from "./WhiteBlouse1.jpg";
import StripePant1 from "./StripePant1.jpg";
import './Products.css'

class Product extends React.Component {
  render() {
    let newArrivals = [
        {
          id: 1,
          name: "Silk Ruffle Blouse",
          price: "$168.00",
          image: `${BlueBlouse1}`,
          filter: "New Arrivals"
        },
        {
          id: 2,
          name: "White Ruffle Blouse",
          price: "$194.00",
          image: `${WhiteBlouse1}`,
          filter: "Lounge"
        },
        {
          id: 3,
          name: "Sport Stripe Regent Pants",
          price: "$180.00",
          image: `${StripePant1}`,
          filter: "New Arrivals"
        },
        {
            id: 4,
            name: "Sport Stripe Regent Pants",
            price: "$180.00",
            image: `${StripePant1}`,
            filter: "New Arrivals"
          },
          {
            id: 5,
            name: "Sport Stripe Regent Pants",
            price: "$180.00",
            image: `${StripePant1}`,
            filter: "New Arrivals"
          },
      ];
      let name=this.props.match.params.filter
      let products=newArrivals.filter((newArrival)=>newArrival.filter===name)
    return (
      <div className="Main">
          <div className="Title">
              <h2>{name}</h2></div>
          <div >
              <InventoryPreview list={products} />
        </div>
    </div>

    );
  }
}

export default Product;