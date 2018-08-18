export function ConvertStringToShorterString(string, start, end) {
  if (string.length > end) {
    string = string.slice(start, end) + '...';
  }
  return string;
}
