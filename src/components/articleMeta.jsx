import React from 'react';
import { css } from '@emotion/core';

const ArticleMeta = ({ tags, date }) => {
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
          Posted: <time date={date}>{date}</time>
        </span>
        <span
          css={css`
            color: #ff729f;
            font-weight: 400;
          `}
        >
          {tags}
        </span>
      </small>
    </div>
  );
};

export default ArticleMeta;
