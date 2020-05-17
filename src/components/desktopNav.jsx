import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

// grab the last 2 breakpoints to alt. 'ul' display between none and flex
const mq = facepaint(MediaQueries.slice(4));

const linkStyle = css`
  color: #2f3640;
  letter-spacing: 0.055rem;

  &:hover {
    color: #ff729f;
  }
`;

const NavItem = styled(`li`)`
  font-size: 1.8rem;
  text-align: center;
  padding: 0 0.55rem;
  flex: ${props => (props.social ? 0.4 : 0.75)};
  margin-right: ${props => props.last && '1rem'};
`;

export const DesktopNav = () => {
  return (
    <ul
      css={mq({
        listStyle: 'none',
        display: ['none', 'none', 'flex'],
      })}
    >
      <NavItem>
        <Link to="/" css={linkStyle} activeClassName="current-page">
          Home
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/about/" css={linkStyle} activeClassName="current-page">
          About
        </Link>
      </NavItem>

      <NavItem social>
        <span>|</span>
      </NavItem>

      <NavItem social>
        <a href="https://github.com/mmman64" css={linkStyle}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </NavItem>

      <NavItem social>
        <a href="https://github.com/Marco-FI-SEI" css={linkStyle}>
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </NavItem>

      <NavItem social last>
        <a href="https://twitter.com/MarcoMcnulty" css={linkStyle}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </NavItem>
    </ul>
  );
};
