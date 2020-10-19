
module.exports.date = (date) => {
  date = new Date(date);
  return date
    .toLocaleString('default', { month: 'long' }) + ' ' + date.getUTCFullYear();
};
