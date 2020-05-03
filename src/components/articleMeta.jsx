import React from 'react';
import { css } from '@emotion/core';

const ArticleMeta = ({ articleTags, datetime }) => {
  return (
    <div
      css={css`
        font-size: 1.2rem;
        text-align: right;
      `}
    >
      <small>
        <span
          css={css`
            display: block;
            font-weight: 400;
          `}
        >
          Posted: <time datetime={datetime}>Human time</time>
        </span>
        <span
          css={css`
            color: #ff729f;
            font-weight: 400;
          `}
        >
          {articleTags}
        </span>
      </small>
    </div>
  );
};

export default ArticleMeta;
