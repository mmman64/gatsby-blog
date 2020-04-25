import React from 'react';
import styled from '@emotion/styled';
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

const TextBox = styled('div')`
  height: 100%;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    font-size: 4rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

// graphQL fragment with webp calculated behind the scenes
// the fragment destructures everything available within fluid
// *** gatsby determines whether the browser can support webp for you ***
const Hero = () => {
  // const { image } = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: { eq: "davisco-blue-orange.jpg" }) {
  //       sharp: childImageSharp {
  //         fluid(maxWidth: 1000, quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    // <ImageBackground tag="section" fluid={image.sharp.fluid}>
    // </ImageBackground>
    <TextBox>
      <h1>Marco McNulty</h1>
      <p>Tech and miscellaneous ramblings</p>
    </TextBox>
  );
};

export default Hero;
