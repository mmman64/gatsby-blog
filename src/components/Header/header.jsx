import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { getMediaQuery as mq } from '../../helpers/mediaQueryHelpers';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

const SiteHeader = styled(`header`)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem calc((100vw - 1200px) / 2);
  background-color: #fbc531;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
`;

const SiteName = styled(`div`)`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.11rem;
  margin-left: 1rem;
`;

const MenuToggle = styled(`div`)`
  cursor: pointer;
  margin-right: 1rem;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SiteHeader>
        <SiteName>
          <Link to="/">Marco McNulty</Link>
        </SiteName>
        <MenuToggle
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          css={{
            [mq('tabletLandscape')]: {
              display: 'none',
            },
          }}
        >
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            css={{
              height: '2rem',
              width: '2rem',
              paddingTop: '0.15rem',
            }}
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </MenuToggle>
        <DesktopNav />
      </SiteHeader>
      <div
        css={css`
          position: relative;
        `}
      >
        <MobileNav menuOpen={menuOpen} />
      </div>
    </>
  );
};

export default Header;
