import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    UNSAFE_componentWillMount() {
        //willmount: before we render the child component, we already have the access toi the props there so we can already get the queryParasm there and we do this at the point of time where we don't render children so we can set up the state prior to render children.
        //using componentDidMount and not DidUpdate because whenever i load this component, it will mount itself. there is no way i caount route to it without it being mounted again because it is not nested in some other page etc.
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    checkoutCancelledHandler = () => {
        //we used this function syntax because we wanted to use the 'this' keyword here.
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
{/* by rendering ContactData manually here we dont have history object available there. there are 2 ways to fix this. (1) to wrap ContactData export with withRouter helper method. or 
                (2) other would be to pass history which we get in the props of this render method here onto ContactData   */}
            </div>
        );
    }
}

export default Checkout;