/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import facepaint from 'facepaint';
import { GLOBAL_BREAKPOINTS as GB } from '../config/responsive';
// function to build media query from desired breakpoint
const mq = device => {
  return `@media(min-width: ${GB[device]}px)`;
};

const allMq = facepaint(
  Object.values(GB).map(size => {
    return `@media (min-width: ${size}px)`;
  }),
);

const TestComponent = () => {
  return (
    <div>
      <div
        css={{
          color: 'green',
          height: '50px',
          width: '50px',
          [mq('phonePortrait')]: {
            color: 'red',
          },
        }}
      >
        Hello
      </div>
      <div
        css={allMq({
          color: [
            'red',
            'purple',
            'yellow',
            'green',
            'pink',
            'blue',
            'black',
            'orange',
            'grey',
          ],
        })}
      >
        Goodbye
      </div>
    </div>
  );
};

export default TestComponent;
