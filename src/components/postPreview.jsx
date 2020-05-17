import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import ArticleMeta from './articleMeta';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';

// grab the last 2 breakpoints to alt. 'ul' display between none and flex
const mq = facepaint(MediaQueries.slice(3, 5));

const PostPreview = ({ post }) => (
  <Fragment>
    <div
      to={post.slug}
      css={mq({
        margin: '1rem auto',
      })}
    >
      <article
        css={css`
          margin: 3rem 0 1.5rem 0;
          width: 100%;
        `}
      >
        <h3
          css={css`
            margin-bottom: 0.5rem;
            font-weight: 700;
          `}
        >
          {post.title}
        </h3>
        <p
          css={css`
            text-align: justify;
            margin: 1.4rem 0;
            line-height: 1.5;
          `}
        >
          {post.excerpt}
          <Link to={post.slug}>
            <span
              css={css`
                color: #ff729f;
                margin-left: 1rem;
              `}
            >
              Read more &rarr;
            </span>
          </Link>
        </p>
        <ArticleMeta date={post.date} tags={post.tags} />
      </article>
    </div>
    <hr />
  </Fragment>
);

export default PostPreview;
