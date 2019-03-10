import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import ToggleButton from './toggle';

const Nav = styled.nav`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(-100%);
  transition: transform 0.6s ease-in-out;
  &.is-open {
    transform: translateX(0);
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const NavWrapper = styled.div`
  .menu-toggle {
    color: white;
    position: absolute;
    z-index: 200;
    top: 1.2rem;
    left: 1rem;
    &.is-open {
      color: rebeccapurple;
    }
  }
`;

const MainNav = ({ isOpen, onToggle }) => (
  <NavWrapper>
    <ToggleButton isOpen={isOpen} onClick={onToggle} />
    <Nav className={isOpen ? 'is-open' : ''}>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2">Page 2</Link>
        </li>
      </NavList>
    </Nav>
  </NavWrapper>
);

MainNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MainNav;
