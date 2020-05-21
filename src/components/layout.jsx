import { Global, css } from '@emotion/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/header';
import Footer from './footer';
import normalize from 'normalize.css';
import 'typeface-open-sans';
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
            font-size: 20px;
            font-weight: 300;
            text-rendering: optimizeLegibility;
            box-sizing: border-box;
            height: 100vh;
            width: 100vw;
            ${mq('phoneSmall')} {
              font-size: 0.6rem;
            }
            ${mq('phonePortrait')} {
              font-size: 1rem;
            }
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
            margin: 0 auto;
            max-width: 1200px;
          }

          section {
            width: 100%;
            margin: 1rem auto;
          }

          h2,
          h3 {
            display: inline-block;
            border-bottom: 5px solid #ff729f;
            background-color: #fbc532;
            border-radius: 5px;
            padding: 0 1rem;
            margin: 2rem 0 1.2rem 0;
          }

          h1 {
            font-size: 4rem;
            font-weight: 300;
          }

          h2 {
            font-size: 3rem;
            font-weight: 400;
          }

          h3 {
            font-size: 2rem;
            font-weight: 400;
            font-style: italic;
          }

          p {
            font-size: 1.5rem;
            font-weight: 400;
            margin: 0 0 1.25rem 0;
          }

          ul,
          ol {
            font-size: 1.5rem;
            font-weight: 400;
            margin: 0 2rem 2rem 2rem;
          }

          pre,
          code {
            font-size: 1.2rem;
            text-align: left;
            white-space: pre-wrap;
            width: 100%;
            margin: 2rem auto;
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>"
        ></link>
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
