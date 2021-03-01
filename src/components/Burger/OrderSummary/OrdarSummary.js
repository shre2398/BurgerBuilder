import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component
  // componentWillUpdate() {
  //   console.log('[OrderSummary.js] componentWillUpdate');
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => (
        <li key={igKey}>
          <span style={{ textTransform: 'Capitalize' }}> {igKey} </span> :
          {this.props.ingredients[igKey]}
        </li>
      )
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)}</strong>
        </p>
        <Button clicked={this.props.purchaseCanceled} btnType='Danger'>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType='Success'>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
