import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../../components/cart-item/cart-item.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}></CartItem>
      ))}
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropdown);
