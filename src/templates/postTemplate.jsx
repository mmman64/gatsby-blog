/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { graphql, Link } from 'gatsby';
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
        fontSize: '3.5rem',
        borderBottom: '0.5rem solid #ff729f',
        marginTop: '10rem',
        marginBottom: '5rem',
        textAlign: 'center',
        paddingBottom: '2rem'
      }}
    >
      {post.frontmatter.title}
    </h1>

    <div
      css={{
        width: '95%',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'left',
        lineHeight: '2rem',
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
      <p
        css={css`
          font-size: 1rem;
          color: #ff729f;
          text-align: right;
          margin: 0;
        `}
      >
        Posted: {post.frontmatter.date}
      </p>
      <Link to="/">
        <span
          css={css`
            color: #ff729f;
            font-size: 1.25rem;
            font-weight: 400;
          `}
        >
          &larr; Go back...
        </span>
      </Link>
    </div>
  </Layout>
);

export default PostTemplate;
