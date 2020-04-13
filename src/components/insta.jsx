import React, { Fragment } from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPics = useInstagram();
  const { username } = instaPics[0];

  return (
    <Fragment>
      <h2>Awesome insta pics from {username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem - 0.5rem;
        `}>
        {instaPics.map(pic => (
          <a
            key={pic.id}
            href={`https://instagram.com/p/${pic.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={pic.fluid}
              alt={pic.caption}
              css={css`
                width: 100%

                * {
                  margin-top: 0;
                }
              `}
              />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/zmfheadphones`}>
        See more on Instagram &rarr;
      </a>
    </Fragment>
  );
};

export default Insta;
