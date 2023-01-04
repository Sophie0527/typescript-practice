import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  const location = useLocation();

  return (
    <Container>
      <img src="/logo192.png" alt="react_logo" />
      <div>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          HOME
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'active' : ''}
        >
          ABOUT
        </Link>
        <Link
          to="/community"
          className={location.pathname === '/community' ? 'active' : ''}
        >
          COMMUNITY
        </Link>
        <Link
          to="/cart"
          className={location.pathname === '/cart' ? 'active' : ''}
        >
          CART
        </Link>
      </div>
    </Container>
  );
}
export default NavBar;

const Container = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 40px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 30px -30px;
  background-color: #e6eef4;
  img {
    max-width: 80px;
    margin-bottom: 5px;
  }
  div {
    display: flex;
    gap: 20px;
    a {
      font-size: 18px;
      text-decoration-line: none;
      color: #1882c9;
      font-weight: 500;
      cursor: pointer;
      &.active {
        color: #0e5584;
        font-weight: 700;
      }
    }
  }
`;
