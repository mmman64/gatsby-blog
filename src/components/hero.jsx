import React from 'react';
import { css } from '@emotion/core';

const Hero = ({ text }) => (
  <section>
    <h1
      css={css`
        text-align: center;
        border: 1.1rem solid #ff729f;
        border-radius: 8.33rem;
        padding: 1.1rem 1.5rem;
      `}
    >
      {text}
    </h1>
  </section>
);

export default Hero;
