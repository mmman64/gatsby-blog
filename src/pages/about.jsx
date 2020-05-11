import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { interestEmojis } from '../components/interestEmojis';
import Image from 'gatsby-image';

const InterestList = styled.ul`
  list-style: none;
  margin: 5rem auto;
  width: 100%;
`;

const InterestListItem = styled.li`
  border-radius: 2px;
  padding: 0.7rem 0 0.3rem 2rem;
  height: 5rem;
  font-size: 3rem;
`;

const AboutAsideText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2rem;
  text-align: justify;
`;

const CloudProjectsList = styled.ul`
  text-align: left;
  font-size: 1.1rem;
  padding-left: 0.5rem;
  margin: 1rem;
  line-height: 2rem;
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
          fixed(width: 700, height: 1055, quality: 100, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero text="👻 About Me 👻" />

      <section
        css={css`
          margin-top: 0;
          padding-top: 10rem;
          transform: perspective(150px) rotateY(-2deg);
        `}
      >
        <figure
          css={css`
            display: flex;
            justify-content: flex-end;
            border: 15px solid black;
            border-radius: 100px;
          `}
        >
          <Image
            fixed={image.sharp.fixed}
            fadeIn={true}
            alt="Chilling with some great headphones"
          />
          <figcaption
            css={css`
              background-color: #fbc531;
              border-left: 5px solid black;
              padding: 0.9rem;
              width: 32rem;
            `}
          >
            <AboutAsideText
              css={css`
                margin-top: 1rem;
              `}
            >
              <small>
                I'm Marco, an Irish Italian developer from London and I'm
                currently looking for an interesting new role as a Fullstack Web
                Developer!
              </small>
            </AboutAsideText>

            <AboutAsideText>
              <small>
                At the moment, I'm interested in Ruby on Rails for quick
                prototyping and being productive with minimal tooling, as well
                as React &amp; Co. (Gatsby, Node, GraphQL, TypeScript) for
                building modern, scalable and maintainable applications.
              </small>
            </AboutAsideText>

            <AboutAsideText
              css={css`
                margin-bottom: 0.5rem;
              `}
            >
              <small>
                I'm also currently working on projects that are extending my
                skills into the DevOps area. Areas of focus include:
                <CloudProjectsList>
                  <li>Deploying a static site to AWS</li>
                  <li>Deploying a full-stack application to AWS</li>
                  <li>
                    Refactoring a monolithic application to a microservices
                    architecture (employing Docker, Kubernetes and Travis for
                    CI/CD)
                  </li>
                  <li>Develop and deploy a serverless application to AWS</li>
                </CloudProjectsList>
              </small>
            </AboutAsideText>

            <AboutAsideText>
              <small>
                Previously, I resided in Dublin where I worked with a Healthcare
                startup on a cloud-based, mobile-first EHR system for care
                facilities across Europe. My previous stack utilised C#,
                AngularJS, TypeScript, vanilla JS, CSS, HTML.
              </small>
            </AboutAsideText>

            <AboutAsideText>
              <small>
                Check out my personal and Flatiron-specific GitHub accounts (I'm
                all about separation of concerns and/or follow me on Twitter!
              </small>
            </AboutAsideText>
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
