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
  color: #fff;
  letter-spacing: 0.055rem;

  &:hover {
    color: #ff729f;
  }
`;

const NavItem = styled(`li`)`
  font-size: 3rem;
  color: #ff729f;
  text-align: center;
  flex: 1;
  padding: 2rem 0;
  ${mq('phoneSmall')} {
    font-size: 1.5rem;
  };
  ${mq('phoneLandscape')} {
    font-size: 3rem;
  };
  ${mq('tabletPortrait')} {
    font-size: 4rem;
  };
`;

const HR = styled(`hr`)`
  border-color: #ff729f;
`;

const MobileNav = ({ menuOpen }) => (
  <nav
    css={css`
      width: 100%;
      position: absolute;
      opacity: 0.95;
      background-color: black;
      visibility: ${menuOpen ? 'visible' : 'hidden'};
      z-index: 1;
    `}
  >
    <ul css={css`height: 100%;`}>
      <div css={css`height: 50%;`}>
        <NavItem>
          <Link to="/" css={linkStyle} activeClassName="current-page">
            Home
          </Link>
        </NavItem>

        <HR />

        <NavItem>
          <Link to="/about/" css={linkStyle} activeClassName="current-page">
            About
          </Link>
        </NavItem>

        <HR />
      </div>

      <div
        css={{
          height: '25%',
          display: 'flex',
          justifyContent: 'space-between',
          listStyle: 'none',
          width: '80%',
          margin: '0 auto',
          [mq('phonePortrait')]: {
            width: '50%'
          },
        }}
      >
        <NavItem social>
          <a
            href="https://github.com/mmman64"
            target="_blank"
            rel="noopener noreferrer"
            css={linkStyle}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </NavItem>

        <NavItem social>
          <span>|</span>
        </NavItem>

        <NavItem social>
          <a
            href="https://github.com/Marco-FI-SEI"
            target="_blank"
            rel="noopener noreferrer"
            css={linkStyle}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </NavItem>

        <NavItem social>
          <span>|</span>
        </NavItem>

        <NavItem social last>
          <a
            href="https://twitter.com/MarcoMcnulty"
            target="_blank"
            rel="noopener noreferrer"
            css={linkStyle}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </NavItem>
      </div>
      <hr />
    </ul>
  </nav>
);

export default MobileNav;
