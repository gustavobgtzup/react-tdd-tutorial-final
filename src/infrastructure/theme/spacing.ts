const multiplier = 0.4;
const N = 20;
const base = [...Array(N + 1).keys()].slice(1);

export const space = base.map(value => `${value * multiplier}rem`);
