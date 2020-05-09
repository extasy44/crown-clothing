import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.action';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContatiner, OptionsContatiner, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContatiner to="/">
      <Logo />
    </LogoContatiner>
    <OptionsContatiner>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
          {currentUser}
        </OptionLink>
      )}

      <CartIcon />
    </OptionsContatiner>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);