import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import "./Stripe.css"
import CheckoutForm from './CheckoutForm';

class Charge extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_P2eg91VQqiXcRyShaMaspkMY">
        <div className="example">
          <h1 id="stripe-info">Use Stripe to process your credit card.</h1>
          <Elements>
            <div className="checkout">
            <CheckoutForm />
            </div>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Charge;