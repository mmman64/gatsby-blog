import React from 'react';
import { css } from '@emotion/core';
import { getMediaQuery as mq } from '../helpers/mediaQueryHelpers';
import { getAllMediaQueries as allMq } from '../helpers/mediaQueryHelpers';

const Hero = ({ text }) => (
  <section
    css={allMq({
      textAlign: 'center',
      marginTop: [
        '30%',
        '',
        '',
        '20%',
        '20%',
        '15%',
        '15%',
        '10%',
        '',
        '10%',
        '',
        '',
      ],
    })}
  >
    <h1
      css={{
        borderBottom: '0.5rem solid #ff729f',
        borderRadius: '20px',
        display: 'inline-block',
        paddingBottom: '0.75rem',
        textAlign: 'center',
        [mq('phoneSmall')]: {
          fontSize: '2rem',
        },
        [mq('tabletPortrait')]: {
          fontSize: '3rem',
        },
      }}
    >
      {text}
    </h1>
  </section>
);

export default Hero;
