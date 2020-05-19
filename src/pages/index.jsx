/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../components/layout';
import { getMediaQuery as mq } from '../helpers/mediaQueryHelpers';
import PostPreview from '../components/postPreview';
import Hero from '../components/hero';
import usePosts from '../hooks/usePosts';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <Hero text="Tech, music, emojis, miscellaneous ramblings..." />

      <section
        css={{
          marginTop: '10%',
          maxWidth: '80%',
          [mq('phoneSmall')]: {
            width: '100%',
          },
        }}
      >
        <h2>Posts</h2>

        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  );
};
