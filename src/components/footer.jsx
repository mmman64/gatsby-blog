import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const FooterEmoji = styled(`span`)`
  color: transparent;
  text-shadow: 0 0 #fff;
  padding: 0 0.3rem;
`;

const Footer = () => (
  <footer
    css={css`
      padding: 1rem 0;
      background-color: #2f3640;
      color: #fff;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <small>
      <span css={css`font-style: italic;`}>Made with</span>
      <FooterEmoji role="img" aria-label="bicep emoji">💪</FooterEmoji>
      <FooterEmoji role="img" aria-label="music emoji">🎧</FooterEmoji>
      <FooterEmoji role="img" aria-label="beer emoji">🍺</FooterEmoji>
    </small>
  </footer>
);

export default Footer;
