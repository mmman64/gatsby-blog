import React from 'react';
import { css } from '@emotion/core';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';

// grab the last 2 breakpoints to alt. 'ul' display between none and flex
const mq = facepaint(MediaQueries.slice(3, 5));

const Hero = ({ text }) => (
  <section
    css={mq({
      textAlign: 'center',
      marginTop: '10%',
      maxWidth: ['100%', '50%'],
    })}
  >
    <h1
      css={css`
        border-bottom: 0.5rem solid #ff729f;
        border-radius: 20px;
        display: inline-block;
        padding-bottom: 0.75rem;
      `}
    >
      {text}
    </h1>
  </section>
);

export default Hero;
