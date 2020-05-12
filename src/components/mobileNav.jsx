import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const linkStyle = css`
  color: #2f3640;
  letter-spacing: 0.055rem;

  &:hover {
    color: #ff729f;
  }
`;

const LockMenu = styled(FontAwesomeIcon)`
  font-size: 2rem;
  text-align: center;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const NavName = styled(`div`)`
  font-size: 1.8rem;
  flex: 5;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.11rem;
  margin-left: 1rem;
`;

const handleClick = () => {
  console.log("hi")
}

const MobileNav = () => (

  <nav
    css={css`
      width: 100%;
      display: flex;
      align-items: center;
    `}
  >
    <NavName>
      <Link to="/" css={linkStyle}>
        Marco McNulty
      </Link>
    </NavName>
    <LockMenu
      icon={faLock}
      css={linkStyle}
      onClick={() => handleClick()} />
  </nav>
);

export default MobileNav;
