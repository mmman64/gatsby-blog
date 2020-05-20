/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

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
      margin-top: 5rem;
    `}
  >
    <small css={css`font-size: 0.8rem;`}>
      <span css={css`font-style: italic;`}>Made with</span>
      <FooterEmoji role="img" ariaLabel="bicep emoji">💪</FooterEmoji>
      <FooterEmoji role="img" ariaLabel="music emoji">🎧</FooterEmoji>
      <FooterEmoji role="img" ariaLabel="beer emoji">🍺</FooterEmoji>
    </small>
  </footer>
);

export default Footer;
