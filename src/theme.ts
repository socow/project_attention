const device = {
  mobile: `only screen and (max-width: 550px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};
export const theme = {
  device,
};

export type Theme = typeof theme;
