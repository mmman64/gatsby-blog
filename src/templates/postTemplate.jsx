import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import facepaint from 'facepaint';
import MediaQueries from '../config/responsive';
import Layout from '../components/layout';

// grab all media queries
const mq = facepaint(MediaQueries);

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      body
    }
  }
`;

// aliasing mdx to post
const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1
      css={mq({
        marginTop: '10%',
        marginBottom: ['20%', '20%', '20%', '10%', '10%', '5%'],
        textAlign: 'center',
      })}
    >
      {post.frontmatter.title}
    </h1>

    <div
      css={mq({
        width: ['100%', '80%'],
        margin: '0 auto',
        textAlign: ['left', 'justify'],
        lineHeight: '2rem',
      })}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
    <p
      css={css`
        font-size: 0.8rem;
        color: #ff729f;
        text-align: right;
      `}
    >
      Posted: {post.frontmatter.date}
    </p>
  </Layout>
);

export default PostTemplate;
