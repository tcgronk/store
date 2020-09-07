import React from "react";
import NewArrivals from "./NewArrivals";
import QuoteBanner from "./QuoteBanner"
import FeaturedItem from "./FeaturedItem";
import BlueBlouse1 from "./BlueBlouse1.jpg";
import EmailForm from "./EmailForm"

class Main extends React.Component {


  render() {
    let item=[{
      id: 123,
      name: "Silk Ruffle Blouse",
      price: "$168.00",
      image: `${BlueBlouse1}`,
      brand: "Ecru",
      sizes: [{id: 1, size: "S", count: 2},{id: 2, size: "M", count: 2},{id: 3, size: "L", count: 2}]
    }]
    return (

      <div className="Main">
          <NewArrivals/>
          <QuoteBanner/>
          <EmailForm/>
          <FeaturedItem item={item}/>
          </div>
    );
  }
}

export default Main;