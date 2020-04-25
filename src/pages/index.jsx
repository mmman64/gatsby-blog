import React, { Fragment } from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import usePosts from '../hooks/use-posts';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();
  return (
    <Fragment>
      <Layout>
        <h2>Blog Posts</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </Fragment>
  );
};
