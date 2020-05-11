import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import ArticleMeta from './articleMeta';

const PostPreview = ({ post }) => (
  <Fragment>
    <div
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100%;
      `}
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
