import React from 'react';
import { css } from '@emotion/core';
import SiteNav from './siteNav';

const Header = () => (
  <header
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

  </header>
);

export default Header;
