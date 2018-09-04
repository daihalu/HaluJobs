export function ConvertStringToShorterString(string, start, end) {
  if (string.length > end) {
    string = string.slice(start, end) + '...';
  }
  return string;
}

export function getCoordinateOfCurrentAddress(address) {
  const APIKEY = "AIzaSyByBB1jSXbMCz1dlG85eIN5N_y3j7fLRCU";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}=${APIKEY}`;
  return fetch(url).then(response => response.json())
}
