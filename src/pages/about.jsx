/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { getMediaQuery as mq } from '../helpers/mediaQueryHelpers';
import { getAllMediaQueries as allMq } from '../helpers/mediaQueryHelpers';
import { interestEmojis } from '../config/interestEmojis';
import Image from 'gatsby-image';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';

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
  word-spacing: 2px;
  letter-spacing: 1.5px;
  ${[mq('laptopMedium')]} {
    font-size: 1.2rem;
  }
`;

const CloudProjectsList = styled.ul`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  padding-left: 0.5rem;
  margin: 1rem;
  line-height: 1.8rem;
  ${[mq('laptopMedium')]} {
    font-size: 0.9rem;
  }
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
        css={{
          margin: '10rem auto',
          [mq('laptopMedium')]: {
            transform: 'perspective(300px) rotateY(-2deg)',
          },
        }}
      >
        <figure
          css={{
            display: 'block',
            margin: '0 auto',
            justifyContent: 'flex-end',
            boxShadow: '2px 5px 15px 5px rgba(0, 0, 0, 1)',
            maxWidth: '1200px',
            zIndex: 0,
            [mq('tabletPortrait')]: {
              width: '95%',
            },
            [mq('laptopMedium')]: {
              display: 'flex',
              border: '15px solid black',
              boxShadow: '8px 8px 15px 8px rgba(0, 0, 0, 1)',
              borderRadius: '100px',
              maxWidth: '1800px',
            },
          }}
        >
          <Image
            fluid={{ ...image.sharp.fluid, aspectRatio: 3 / 4 }}
            style={{
              width: '100%'
            }}
            alt="Chilling with some great headphones"
          />
          <figcaption
            css={{
              backgroundColor: '#fbc531',
              padding: '0.9rem',
              [mq('laptopMedium')]: {
                width: '100%',
              },
            }}
          >
            <AboutAsideText
              css={css`
                margin-top: 1rem;
              `}
            >
              <small>
                I'm Marco - an 🇮🇪 + 🇮🇹 developer from London and I'm currently
                looking for an interesting new role as a Fullstack Web
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
    </Layout>
  );
};

export default About;
