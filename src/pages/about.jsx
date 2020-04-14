import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      I'm Marco, an Irish Italian developer from
      London!
    </p>
    <p>Into Ruby, JavaScript, Cloud, high-end headphones.</p>

    <Link to="/">&larr; Home</Link>
  </Layout>
);
