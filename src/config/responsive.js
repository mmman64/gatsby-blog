const GLOBAL_BREAKPOINTS = [500, 576, 768, 992, 1200, 1600, 1800, 2300, 2500];
const MEDIA_QUERIES = GLOBAL_BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`);

export default MEDIA_QUERIES;
