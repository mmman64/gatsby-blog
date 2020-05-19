import { Global, css } from '@emotion/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/header';
import Footer from './footer';
import normalize from 'normalize.css';
import 'typeface-open-sans';
import { getAllMediaQueries as allMq } from '../helpers/mediaQueryHelpers';
import { getMediaQuery as mq } from '../helpers/mediaQueryHelpers';
import useSiteMetaData from '../hooks/useSitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData();

  return (
    <>
      <Global
        styles={css`
          ${normalize}

          html,
        body {
            color: #353b48;
            font-family: 'Lato', 'Arial', sans-serif;
            font-size: 18px;
            font-weight: 300;
            text-rendering: optimizeLegibility;
            box-sizing: border-box;
            height: 100vh;
            width: 100vw;
          }

          *,
          *:before,
          *:after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }

          body {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%235e5e60' fill-opacity='0.18' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
          }

          .site {
            display: flex;
            min-height: 100vh;
            min-width: 100vw;
            flex-direction: column;
          }

          .siteContent {
            flex: 1;
            margin: 0;
            ${[mq('phoneSmall')]} {
              margin: 1rem;
            }
          }

          section {
            width: 100%;
            margin: 2% auto;
          }

          h1 {
            font-size: 4rem;
            font-weight: 300;
          }

          h2 {
            font-size: 3rem;
            font-weight: 400;
            display: inline-block;
            border-bottom: 5px solid #ff729f;
            background-color: #fbc532;
            border-radius: 5px;
            padding: 0 1rem;
            margin-top: 5rem;
          }

          h3 {
            font-size: 2rem;
            font-weight: 700;
            font-style: italic;
          }

          p {
            font-size: 1.25rem;
            font-weight: 400;
            margin: 0 0 1.25rem 0;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          .blanched-emoji {
            color: transparent;
            text-shadow: 0 0 #fff;
          }

          .medium-emoji {
            font-size: 1.75rem;
          }
        `}
      />
      {/* Helmet lets you modify the head of a React document */}
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="site">
        <Header />
        <main className="siteContent">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
