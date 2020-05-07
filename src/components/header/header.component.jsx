import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContatiner, OptionsContatiner, OptionLink } from './header.styles';

const Header = (props) => (
  <HeaderContainer>
    <LogoContatiner to="/">
      <Logo />
    </LogoContatiner>
    <OptionsContatiner>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {props.currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
          {props.currentUser}
        </OptionLink>
      )}

      <CartIcon />
    </OptionsContatiner>
    {props.hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);