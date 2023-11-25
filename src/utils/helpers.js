export function formatNumber(num) {
  const formatter = new Intl.NumberFormat('en-US');
  const formatNum = formatter.format(num);
  return formatNum;
}

export function formatCountryNameURL(country) {
  return country.toLowerCase().replaceAll('-', '_').replaceAll(' ', '-');
}
