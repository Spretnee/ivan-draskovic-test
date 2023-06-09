export const formatString = (string: string) => {
  if (string.length <= 6) {
    return '';
  } else {
    return string.slice(3, -3);
  }
};
