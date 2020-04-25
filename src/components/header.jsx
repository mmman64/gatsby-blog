import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

// styled component
const NavLink = styled(Link)`
  color: #F5F5F1;
  font-size: 1.5rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &.last-of-type {
    margin-right: 0;
  }
`;

const HeroTitle = styled('div')`
  font-family: 'Kaushan script', cursive;
`;

const Header = () => (
  <header
    css={css`
      background: #bc0101;
      height: 20vh;
      padding: 0.5rem calc((100vw - 550px -0.5rem) / 2);
    `}
  >
    <nav
      css={css`
      display: flex;
      justify-content: space-between;
      margin-top: 0;
      `}
    >
      <NavLink to="/">
        Marco McNulty
      </NavLink>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
    </nav>

  <HeroTitle>
    <h1
      css={css`
      color: #F5F5F1;
      text-align: center;
      font-size: 5rem;
      padding-top: 30px;
      `}
      >Welcome!</h1>
  </HeroTitle>

  </header>
);

export default Header;
