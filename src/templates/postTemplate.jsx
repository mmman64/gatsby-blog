/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { graphql } from 'gatsby';
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
      css={{
        marginTop: '10%',
        marginBottom: '20%',
        textAlign: 'center',
      }}
    >
      {post.frontmatter.title}
    </h1>

    <div
      css={{
        width: '75%',
        margin: '0 auto',
        textAlign: 'left',
        lineHeight: '2rem',
      }}
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
