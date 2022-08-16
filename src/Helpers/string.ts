export const replaceSpaceWithUnderscore = (s?: string) => {
  return s !== undefined ? s.replace(/ /g, "_") : "";
};

export const replaceUnderscoreWithSpace = (s?: string) => {
  return s !== undefined ? s?.replace(/_/g, " ") : "";
};
