import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

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
      css={css`
        margin-bottom: 1rem;
        margin-left: -6px;
      `}
    >
      {post.frontmatter.title}
    </h1>
    <p
      css={css`
        font-size: 0.8rem;
        color: #ff729f;
      `}
    >
      Posted: {post.frontmatter.date}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate;
