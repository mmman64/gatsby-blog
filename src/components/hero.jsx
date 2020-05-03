import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// const ImageBackground = styled(BackgroundImage)`
//   background-position: top 20% center;
//   background-size: cover;
//   height: 50vh;

//   + * {
//     margin-top: 0;
//   }
// `;

// graphQL fragment with webp calculated behind the scenes
// the fragment destructures everything available within fluid
// *** gatsby determines whether the browser can support webp for you ***

const Hero = (props) => (
  <section>
  {console.log(props)}
    <h1
      css={css`
        text-align: center;
        border: 1.1rem solid #ff729f;
        border-radius: 8.33rem;
        padding: 1.1rem 1.5rem;
        display: ${props => (props.spaced ? 'flex' : 'block')};
        justify-content: ${props => (props.spaced ? 'justify-between' : null)};
        `}
        >
      {props.text}
    </h1>
  </section>
);

export default Hero;
