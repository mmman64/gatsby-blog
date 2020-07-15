/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const MenuToggleIcon = ({ menuOpen }) => (
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
);

export default MenuToggleIcon;
