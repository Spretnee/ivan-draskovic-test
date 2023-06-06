export function formatTime(seconds) {
  var date = new Date(null);
  date.setSeconds(seconds);

  var minutes = date.getUTCMinutes();
  var seconds = date.getSeconds();

  return (
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')
  );
}
