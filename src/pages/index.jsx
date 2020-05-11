import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import PostPreview from '../components/postPreview';
import Hero from '../components/hero';
import usePosts from '../hooks/usePosts';

export default () => {
  const posts = usePosts();
  return (
    <Fragment>
      <Layout>
        <Hero text="Tech, music, emojis, miscellaneous ramblings..." />
        <section
          css={css`
            margin-top: 5rem;
          `}
        >
          <h2>Posts</h2>

          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </section>
      </Layout>
    </Fragment>
  );
};
