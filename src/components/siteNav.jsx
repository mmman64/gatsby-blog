// import React from 'react';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
// import { Link } from 'gatsby';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faTwitter,
//   faGithub,
//   faGithubSquare,
// } from '@fortawesome/free-brands-svg-icons';

// const linkStyle = css`
//   color: #2f3640;
//   letter-spacing: 0.055rem;

//   &:hover {
//     color: #ff729f;
//   }
// `;

// const NavItem = styled(`li`)`
//   font-size: 1.8rem;
//   text-align: center;
//   padding: 0 0.55rem;
//   flex: ${props => (props.social ? 0.4 : 0.75)};
//   margin-right: ${props => props.last && '1rem'};
// `;

// const NavName = styled(`li`)`
//   font-size: 1.8rem;
//   flex: 5;
//   font-weight: 700;
//   text-align: left;
//   letter-spacing: 0.11rem;
//   margin-left: 1rem;
// `;

// const SiteNav = () => (
//   <nav
//     css={css`
//       width: 100%;
//     `}
//   >
//     <ul
//       css={css`
//         display: flex;
//         list-style: none;
//       `}
//     >
//       <NavName>
//         <Link to="/" css={linkStyle}>
//           Marco McNulty
//         </Link>
//       </NavName>

//       <NavItem>
//         <Link to="/" css={linkStyle} activeClassName="current-page">
//           Home
//         </Link>
//       </NavItem>

//       <NavItem>
//         <Link to="/about/" css={linkStyle} activeClassName="current-page">
//           About
//         </Link>
//       </NavItem>

//       <NavItem social>
//         <span>|</span>
//       </NavItem>

//       <NavItem social>
//         <a href="https://github.com/mmman64" css={linkStyle}>
//           <FontAwesomeIcon icon={faGithub} />
//         </a>
//       </NavItem>

//       <NavItem social>
//         <a href="https://github.com/Marco-FI-SEI" css={linkStyle}>
//           <FontAwesomeIcon icon={faGithubSquare} />
//         </a>
//       </NavItem>

//       <NavItem social last>
//         <a href="https://twitter.com/MarcoMcnulty" css={linkStyle}>
//           <FontAwesomeIcon icon={faTwitter} />
//         </a>
//       </NavItem>
//     </ul>
//   </nav>
// );

// export default SiteNav;
