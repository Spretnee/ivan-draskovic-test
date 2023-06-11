export const formatString = (string: string | undefined) => {
  const regex = /<[^>]+>/g;

  const formattedString = string?.replace(regex, '');

  return formattedString;
};
