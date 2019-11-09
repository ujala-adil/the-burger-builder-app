import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {

  //   state = {
  //     show: true
  //   }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }

  render() {
    return (
      <div>
        <Layout>
          {/* <BurgerBuilder /> */}
          {/* {this.state.show ?  <BurgerBuilder />: null}  */}
          {/* BurgerBuilderis only added to the DOM when show is true */}
          {/* <Checkout /> */}

          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} /> {/* without exact, order will matter */}
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;


// {/* 
// <Route path="/" component={BurgerBuilder}/> 
// <Route path="/checkout" component={Checkout}/> 
// IN THIS WAY, BOTH TIMES CHECKOUT WILL BE DISPLAYED.
// FOR BURGERBUILDER / WOULD BE LOADED.
// */}


// {/* <Route path="/" exact component={BurgerBuilder}/> 
// <Route path="/checkout" component={Checkout}/> 
// WE ADDED THE EXACT PROP TO PREVENT THE ABOVE ISSUE
// OR WE CAN USE SWITCH COMPONENT TO WRAP OUR ROUTES TO ONLY GET ONE HIT BUT THEN WE ALSO WE ALSO NEED TO CHANGE THE ORDER AS SHOWN BELOW.
// <Route path="/" exact component={BurgerBuilder}/> 
// <Route path="/checkout" component={Checkout}/> 
// WITH EXACT THE ORDER DOESN'T MATTER BECAUSE IT IS NOT TREATED AS A PREFIX IT'S NOT CATCHING EVERYTHING. WITHOUT EXACT, THE ORDER WOULD MATTER. */}
