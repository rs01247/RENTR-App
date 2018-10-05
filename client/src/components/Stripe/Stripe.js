import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Charge extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_P2eg91VQqiXcRyShaMaspkMY">
        <div className="example">
          <h4>React Stripe Elements Example</h4>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Charge;