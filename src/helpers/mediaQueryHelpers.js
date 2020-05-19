import { GLOBAL_BREAKPOINTS as gb } from '../config/responsive';
import facepaint from 'facepaint';

// function to build media query from desired breakpoint
export const getMediaQuery = device => {
  return `@media(min-width: ${gb[device]}px)`;
};

export const getAllMediaQueries = facepaint(
  Object.values(gb).map(size => {
    return `@media (min-width: ${size}px)`;
  }),
);
