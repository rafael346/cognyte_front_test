export function formatDate(data: Date) {
  let formattedDate = data.getFullYear() + '-' + data.getMonth() + '-' + data.getDate();
  return formattedDate;
}
