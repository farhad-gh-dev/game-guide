export const replaceSpaceWithUnderscore = (s?: string) => {
  return s !== undefined ? s.replace(/ /g, "_") : "";
};

export const replaceUnderscoreWithSpace = (s?: string) => {
  return s !== undefined ? s?.replace(/_/g, " ") : "";
};

export const capitalize = (s?: string) => {
  if (!s) return "";

  return s
    ?.split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
