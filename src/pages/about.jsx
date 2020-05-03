import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { interestEmojis } from '../components/interestEmojis';
import Image from 'gatsby-image';

const AboutImage = styled(Image)``;

const InterestList = styled.ul`
  list-style: none;
  margin: 5rem auto;
  width: 75%;
`;

const InterestListItem = styled.li`
  border-radius: 2px;
  padding: 0.7rem 0 0.3rem 2rem;
  height: 5rem;
  font-size: 3rem;
`;

const renderInterests = () => {
  const interests = interestEmojis.map(emojiObj => {
    const { icon, text, style } = emojiObj;
    return (
      <InterestListItem css={style}>
        {icon} - {text}
      </InterestListItem>
    );
  });

  return interests;
};

const About = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about-chilling.jpg" }) {
        sharp: childImageSharp {
          fixed(width: 700, height: 956, quality: 100, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero
        text="👻 About Me 👻"
        spaced={spaced}
      />

      <section>
        <figure
          css={css`
            display: flex;
            justify-content: flex-end;
            border: 2px solid black;
          `}
        >
          <AboutImage
            fixed={image.sharp.fixed}
            fadeIn={true}
            alt="Chilling with some great headphones"
          />
          <figcaption
            css={css`
              font-size: 1.2rem;
              font-weight: 700;
              font-style: italic;
              background-color: #fbc531;
              border-left: 10px solid black;
              padding: 1rem;
              width: 25rem;
            `}
          >
            <p>
              <small>
                I'm Marco, an Irish Italian developer from London! 🇮🇪 🇬🇧 🇮🇹
              </small>
            </p>

            <p>
              <small>
                Currently, I'm looking for an interesting new role as a
                frontend-focused Fullstack Web Developer.
              </small>
            </p>

            <p>
              <small>
                I'm learning Rails for quick prototyping and being productive
                with minimal tooling, as well as React for building scalable and
                maintainable frontends.
              </small>
            </p>

            <p>
              <small>
                Previously, I resided in Dublin where I worked with a Healthcare
                startup on a cloud-based, mobile-first EHR system for care
                facilities across Europe. My previous stack utilised C#,
                AngularJS, TypeScript, vanilla JS, CSS, HTML.
              </small>
            </p>

            <p>
              <small>
                My previous stack utilised C#, AngularJS, TypeScript, vanilla
                JS, CSS, HTML.
              </small>
            </p>

            <p>
              <small>
                Check out my personal and Flatiron-specific GitHub account (I'm
                all about separation of concerns
                <span className="medium-emoji">👌</span>) and/or follow me on
                Twitter<span className="medium-emoji">✌</span>.
              </small>
            </p>
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Current interests:</h2>

        <InterestList>{renderInterests()}</InterestList>
      </section>
    </Layout>
  );
};

export default About;
