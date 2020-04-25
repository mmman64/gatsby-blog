import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import Header from './header';
import useSiteMetaData from '../hooks/use-sitemetadata';
import "typeface-open-sans";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData();

  return (
    <Fragment>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #27241D;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the div Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          h1 {
            font-size: 48px;
            font-weight: 300;
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      {/* Helmet lets you modify the head of a React document */}
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 550px;
        `}
      >
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
