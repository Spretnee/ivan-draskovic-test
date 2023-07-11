import dayjs from 'dayjs';

export const formatDate = (date: string): string => {
  const formattedDate = dayjs(date).format('DD MMM YY');
  return formattedDate;
};
