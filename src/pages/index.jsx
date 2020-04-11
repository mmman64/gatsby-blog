import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Home</h1>
    <Link to="/about/">Who am I?</Link>
  </Layout>
);
