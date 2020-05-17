import React from 'react';
import { css } from '@emotion/core';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';
import Layout from '../components/layout';
import PostPreview from '../components/postPreview';
import Hero from '../components/hero';
import usePosts from '../hooks/usePosts';

const mq = facepaint(MediaQueries.slice(3, 5));

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <Hero text="Tech, music, emojis, miscellaneous ramblings..." />
      <section
        css={mq({
          marginTop: '10%',
          maxWidth: ['100%', '50%'],
        })}
      >
        <h2>Posts</h2>

        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  );
};
