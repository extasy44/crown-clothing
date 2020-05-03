import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

//import from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button">&#10005;</span>
  </div>
);

const mapStateToProps = () => ({

});

export default connect(null)(CheckoutItem);
