import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';
import { DesktopNav } from './desktopNav';
import MobileNav from './mobileNav';
import { BurgerIcon } from './burgerIcon';


// grab the last 2 breakpoints to alt. 'ul' display between none and flex
const mq = facepaint(MediaQueries.slice(-2));

// calc((100vw - 100px - 0.5rem) / 2)

const SiteHeader = styled(`header`)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem calc((100vw - 80rem) / 2);
  background-color: #fbc531;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%235e5e60' fill-opacity='0.18' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SiteName = styled(`div`)`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.11rem;
  margin-left: 1rem;
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
      <Fragment>
        <SiteHeader>
          <div
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <SiteName>
              <Link to="/">Marco McNulty</Link>
            </SiteName>
            <DesktopNav />
            <BurgerIcon
              isOpen={this.state.isOpen}
              handleMenuToggle={this.handleMenuToggle}
            />
          </div>
        </SiteHeader>
        <div css={css`
          position: relative;
        `}>
        <MobileNav isOpen={this.state.isOpen} />
        </div>
      </Fragment>
    );
  }
}

export default Header;
