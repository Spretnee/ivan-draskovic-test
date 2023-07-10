import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(duration);
dayjs.extend(customParseFormat);

export const formatTime = (seconds: number): string => {
  const duration = dayjs.duration(seconds, 'seconds');
  const formattedTime = duration.format('mm:ss');
  return formattedTime;
};
