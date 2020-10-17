import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebaseUtils';

import { selectCurrentUser } from '../../redux/user/userSelectors';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './styles';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      <CartDropdown />
    </HeaderContainer>
  );
};

export default Header;
