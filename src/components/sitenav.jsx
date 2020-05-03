import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const NavItem = styled(`li`)`
  font-size: 1.8rem;
  text-align: center;
  padding: 0 0.55rem;
  flex: ${props => (props.social ? 0.4 : 0.75)};
  margin-right: ${props => props.last && '1rem'};
`;

const NavLink = styled(Link)`
  color: #2f3640;
  letter-spacing: 0.055rem;

  &:hover {
    color: #ff729f;
  }
`;

const NavName = styled(`li`)`
  font-size: 1.8rem;
  flex: 5;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.11rem;
  margin-left: 1rem;
`;

const SiteNav = () => (
  <nav
    css={css`
      width: 100%;
    `}
  >
    <ul
      css={css`
        display: flex;
        list-style: none;
      `}
    >
      <NavName>
        <NavLink to="/">Marco McNulty</NavLink>
      </NavName>

      <NavItem>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
      </NavItem>

      <NavItem social>
        <span>|</span>
      </NavItem>

      <NavItem social>
        <NavLink to="https://github.com/mmman64">
          <FontAwesomeIcon icon={faGithub} />
        </NavLink>
      </NavItem>

      <NavItem social>
        <NavLink to="https://github.com/Marco-FI-SEI">
          <FontAwesomeIcon icon={faGithubSquare} />
        </NavLink>
      </NavItem>

      <NavItem social last>
        <NavLink to="https://twitter.com/MarcoMcnulty">
          <FontAwesomeIcon icon={faTwitter} />
        </NavLink>
      </NavItem>
    </ul>
  </nav>
);

export default SiteNav;
