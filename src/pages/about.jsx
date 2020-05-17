import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { interestEmojis } from '../components/interestEmojis';
import Image from 'gatsby-image';

// breakpoints to for image frame sizing
const allMq = facepaint(MediaQueries);

// breakpoints for figcaption and mobile only
let tempMQ = MediaQueries.slice(0, 1);

// breakpoint for only smallest viewport
const mobOnly = facepaint(MediaQueries[3]);

tempMQ.push(MediaQueries.slice(5, 6)[0]);
const figMq = facepaint(tempMQ);

const InterestList = styled.ul`
  list-style: none;
  width: 100%;
  background-color: #2f3640;
  margin-bottom: 5rem;
`;

const InterestListItem = styled.li`
  border-radius: 2px;
  padding: 0.7rem 0 0.3rem 2rem;
  font-size: 3rem;

  &:last-child {
    padding-bottom: 1rem;
  }
`;

const AboutAsideText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1.8rem;
  word-spacing: 5px;
`;

const CloudProjectsList = styled.ul`
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  padding-left: 0.5rem;
  margin: 1rem;
  line-height: 1.8rem;
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
          fluid(maxWidth: 1200, grayscale: true, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero text="About" />

      <section
        css={allMq({
          margin: '0 auto',
          padding: [0, 0, 0, 0, 0, 0, '5%'],
          transform: [
            '',
            '',
            '',
            '',
            '',
            '',
            'perspective(300px) rotateY(-2deg)',
          ],
        })}
      >
        <figure
          css={figMq({
            display: ['block', 'block', 'flex'],
            justifyContent: 'flex-end',
            border: '15px solid black',
            borderRadius: [0, 0, '100px'],
            maxWidth: '1200px',
            margin: '0 auto',
          })}
        >
          <Image
            fluid={{ ...image.sharp.fluid, aspectRatio: 3 / 4 }}
            style={{
              maxWidth: 'calc((100vw - 66px))',
              minWidth: 'calc((30vw))',
            }}
            alt="Chilling with some great headphones"
          />
          <figcaption
            css={figMq({
              backgroundColor: '#fbc531',
              borderLeft: '5px solid black',
              padding: '0.9rem',
              width: ['100%', '100%', '70%'],
            })}
          >
            <AboutAsideText
              css={css`
                margin-top: 1rem;
              `}
            >
              <small>
                I'm Marco - an Irish Italian developer from London and I'm
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
              </small>
            </AboutAsideText>
            <CloudProjectsList>
              <li>Deploying a static site to AWS</li>
              <li>Deploying a full-stack application to AWS</li>
              <li>
                Refactoring a monolithic application to a microservices
                architecture (employing Docker, Kubernetes and Travis for CI/CD)
              </li>
              <li>Developing and deploying a serverless application to AWS</li>
            </CloudProjectsList>

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
                Check out my{' '}
                <a href="https://github.com/mmman64" rel="noopener noreferrer">
                  personal{' '}
                </a>
                and{' '}
                <a
                  href="https://github.com/Marco-FI-SEI"
                  rel="noopener noreferrer"
                >
                  Flatiron-specific{' '}
                </a>
                GitHub accounts (I'm all about separation of concerns 👌) and/or
                follow me on{' '}
                <a
                  href="https://twitter.com/MarcoMcnulty"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                !
              </small>
            </AboutAsideText>
          </figcaption>
        </figure>
      </section>

      <section
        css={mobOnly({
          margin: '0 auto',
          width: ['100%', '50%'],
        })}
      >
        <h2
          css={css`
            width: 100%;
            text-align: center;
            font-style: italic;
            border-width: 10px;
          `}
        >
          Current interests:
        </h2>

        <InterestList>{renderInterests()}</InterestList>
      </section>
    </Layout>
  );
};

export default About;
