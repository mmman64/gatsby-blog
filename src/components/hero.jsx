import React from 'react';
import { css } from '@emotion/core';
import { getMediaQuery as mq } from '../helpers/mediaQueryHelpers';
import { getAllMediaQueries as allMq } from '../helpers/mediaQueryHelpers';

const Hero = ({ text }) => (
  <section
    css={css`
      text-align: center;
      margin-top: 11rem;
      margin-bottom: 5rem;
      ${[mq('phoneSmall')]} {
        max-width: 90%;
      };
      ${[mq('phonePortrait')]} {
        max-width: 75%;
      };
      ${[mq('phoneLandscape')]} {
        max-width: 75%;
      };
      ${[mq('tabletPortrait')]} {
        max-width: 75%;
      };
      ${[mq('desktopSmall')]} {
        max-width: 60%;
      };
    `}
  >
    <h1
      css={{
        borderBottom: '0.5rem solid #ff729f',
        borderRadius: '10px',
        display: 'inline-block',
        padding: '0 1rem 0.75rem 1rem',
        textAlign: 'center',
        [mq('phoneSmall')]: {
          fontSize: '2.4rem',
          fontWeight: 500
        },
        [mq('desktopSmall')]: {
          fontSize: '4.5rem'
        }
      }}
    >
      {text}
    </h1>
  </section>
);

export default Hero;
