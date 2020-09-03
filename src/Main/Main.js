import React from "react";
import NewArrivals from "./NewArrivals";
import QuoteBanner from "./QuoteBanner"
import FeaturedItem from "./FeaturedItem";
import BlueBlouse1 from "./BlueBlouse1.jpg";
import Footer from "./Footer";

class Main extends React.Component {
  render() {
    let item={
      id: 1,
      name: "Silk Ruffle Blouse",
      price: "$168.00",
      image: `${BlueBlouse1}`,
      brand: "Ecru",
      sizes: [{size: "S", count: 2},{size: "M", count: 2},{size: "L", count: 2}]
    }
    return (
      <div className="Main">
          <NewArrivals/>
          <QuoteBanner/>
          <FeaturedItem item={item}/>
          <Footer/>
          </div>

    );
  }
}

export default Main;