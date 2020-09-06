import React from "react";
import { Route, Switch } from "react-router-dom";
import SideMenu from './Side-Menu/SideMenu'
import TopMenu from "./TopMenu/TopMenu"
import Main from "./Main/Main"
import './App.css';

export default class App extends React.Component {
  renderMainRoutes() {
    return (<Switch>
        <Route exact path="/" component={Main} />
        </Switch>
    );
  }
  render(){
  return (
    <div className="App">
      <TopMenu/>
      <p className='Sales-Banner'>
        Free Shipping on all sales!
      </p>
      <div className='Outline'>
      <SideMenu/>
      <span>{this.renderMainRoutes()}</span>
      </div>
    </div>
  );
}
}

