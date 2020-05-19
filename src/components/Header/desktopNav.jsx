/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { getMediaQuery as mq } from '../../helpers/mediaQueryHelpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

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

const DesktopNav = () => (
  <ul
    css={{
      listStyle: 'none',
      display: 'none',
      [mq('laptopSmall')]: {
        display: 'flex',
      },
    }}
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

export default DesktopNav;
