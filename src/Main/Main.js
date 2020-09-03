import React from "react";
import NewArrivals from "./NewArrivals";
import QuoteBanner from "./QuoteBanner"

class Main extends React.Component {
  render() {
  
    return (
      <div className="Main">
          <NewArrivals/>
          <QuoteBanner/>
          </div>

    );
  }
}

export default Main;