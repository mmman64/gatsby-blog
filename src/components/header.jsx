import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const SiteHeader = styled(`header`)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem calc((100vw - 1000px -0.5rem) / 2);
  background-color: #fbc531;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%235e5e60' fill-opacity='0.18' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SiteName = styled(`div`)`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.11rem;
`;

const Burger = styled(`button`)`
  background-color: inherit;
  border: none;

  &:focus {
    outline: none;
  }
`;

const MobileNav = styled(`nav`)`
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  display: flex;
`;

class Header extends Component {
  state = {
    isOpen: false,
  };

  handleMenuToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <SiteHeader>
        <div
          css={css`
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <SiteName>Marco McNulty</SiteName>
          <div>
            <Burger onClick={() => this.handleMenuToggle()} type="button">
              <svg
                css={css`
                  height: 2rem;
                  width: 2rem;
                `}
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {this.state.isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </Burger>
          </div>
        </div>
      </SiteHeader>
    );
  }
}

export default Header;

{
  /* <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg> */
}

{
  /* <header
css={css`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%235e5e60' fill-opacity='0.18' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  padding: 2rem calc((100vw - 1000px -0.5rem) / 2);
  background-color: #fbc531;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
`}
>
<SiteNav />
</header> */
}
