const multiplier = 0.4;
const N = 20;
const base = [...Array(N + 1).keys()].slice(0);

export const space = base.map(value => `${(value * multiplier).toFixed(1)}rem`);
