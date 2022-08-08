export const replaceSpaceWithUnderscore = (s: string) => {
  return s.replace(/ /g, "_");
};

export const replaceUnderscoreWithSpace = (s: string) => {
  return s.replace(/_/g, " ");
};
