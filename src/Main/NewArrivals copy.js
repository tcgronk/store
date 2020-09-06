import React from "react";
import InventoryPreview from "../Inventory/InventoryPreview";
import "./NewArrivals.css";
import BlueBlouse1 from "./BlueBlouse1.jpg";
import WhiteBlouse1 from "./WhiteBlouse1.jpg";
import StripePant1 from "./StripePant1.jpg";

class NewArrivals extends React.Component {
  render() {
    let newArrivals = [
      {
        id: 1,
        name: "Silk Ruffle Blouse",
        price: "$168.00",
        image: `${BlueBlouse1}`,
      },
      {
        id: 2,
        name: "White Ruffle Blouse",
        price: "$194.00",
        image: `${WhiteBlouse1}`,
      },
      {
        id: 3,
        name: "Sport Stripe Regent Pants",
        price: "$180.00",
        image: `${StripePant1}`,
      },
    ];
    return (
      <div className="NewArrivals">
        <div className="Title">
          <h1>New Arrivals</h1>
        </div>
        <div>
          <InventoryPreview list={newArrivals} />
        </div>

      </div>
    );
  }
}

export default NewArrivals;
