import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import ArticleMeta from './articleMeta';

const PostPreview = ({ post }) => (
  <Fragment>
      <article
    css={css`
      margin: 2.8rem 0 1.5rem 0;
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    ></Link>
    <div>
      <h3
        css={css`
          margin-bottom: 0.5rem;
          font-weight: 700;
        `}
      >
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p
        css={css`
          text-align: justify;
          margin: 1.4rem 0;
        `}
      >
        {post.excerpt}
      </p>
      <ArticleMeta datetime={post.dateime} articleTags={post.articleTags} />
    </div>
  </article>
  <hr />
  </Fragment>
);

export default PostPreview;
