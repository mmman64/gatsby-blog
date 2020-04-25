import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const interestEmojis = [
  {icon: '💎', text: 'Ruby', style: css`background-color: #C71A14; color: white; `},
  {icon: 'JS', text: 'JavaScript', style: css`background-color: #F2D539;`},
  {icon: '☁', text: 'Cloud (AWS focused)', style: css`background-color: #E5690A; color: white;`},
  {icon: '🎵', text: 'Music', style: css`background-color: #1ED760; color: white;`},
  {icon: '🎧', text: 'High-end headphones', style: css`background-color: #EACDCD;`},
  {icon: '🌮', text: 'Food', style: css`background-color: #5DC4E9;`},
  {icon: '🏋', text: 'Fitness', style: css`background-color: #FF69B4;`}
];

const InterestList = styled.ul`
  list-style: none;
  margin-left: 12px;
`;
const InterestListItem = styled.li`
  border-radius: 100px;
  width: 50%;
  padding: 5px 0 5px 15px;

`;

const renderInterests = () => {
  const interests = interestEmojis.map(emojiObj => {
    const {icon, text, style} = emojiObj;
    return <InterestListItem css={style}>{icon} - {text}</InterestListItem>;
  });

  return interests;
}

export default () => (
  <Layout>
    <h1>👻 About Me 👻</h1>
    <p>I'm Marco, an Irish Italian developer from London! 🇮🇪 🇬🇧 🇮🇹</p>
    <p>My favourite emoji is the ghost 👻 👻 👻</p>

    <h3>Into:</h3>

    <InterestList>{renderInterests()}</InterestList>

    <p>
      Most recently, all this typing has my wrists feeling a little tired so I'm
      diving headfirst into the ergo mech keeb world ⌨ 😱. Looking forward to
      geeking out a little on all these topics here!
    </p>

    <Link to="/">&larr; Home</Link>
  </Layout>
);
