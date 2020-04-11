import React, { Fragment } from "react";
import  { Link } from "gatsby";

export default () => (
  <Fragment>
    <h1>About Me</h1>
    <p>I'm Marco, an Irish Italian <strike>Stallion</strike> developer from London!</p>
    <p>Into Ruby, JavaScript, Cloud, high-end headphones.</p>

    <Link to="/">&larr; Home</Link>
  </Fragment>
)
