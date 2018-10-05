import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import "./Stripe.css"
import CheckoutForm from './CheckoutForm';

class Charge extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_P2eg91VQqiXcRyShaMaspkMY">
        <div className="example">
          <h4 id="stripe">Use Stripe to process your credit card.</h4>
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