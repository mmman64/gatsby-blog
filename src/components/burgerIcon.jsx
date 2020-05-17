import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';

// grab the last 2 breakpoints to alt. 'ul' display between none and flex
const mq = facepaint(MediaQueries.slice(4));

const Burger = styled(`button`)`
  background-color: inherit;
  border: none;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const BurgerIcon = ({ isOpen, handleMenuToggle }) => {
  return (
    <Burger
      onClick={() => handleMenuToggle()}
      type="button"
      css={mq({
        display: ['block', 'block', 'none'],
      })}
    >
      <svg
        css={css`
          height: 2rem;
          width: 2rem;
        `}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path d="M6 18L18 6M6 6l12 12"></path>
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        )}
      </svg>
    </Burger>
  );
};
