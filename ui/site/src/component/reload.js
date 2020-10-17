let redirectInProgress = false;

export const redirect = obj => {
  let url;
  if (typeof obj === 'string') url = obj;
  else {
    url = obj.url;
    if (obj.cookie) {
      
    }
  }
  const href = '//' + location.host + '/' + url.replace(/^\//, '');
  redirectInProgress = href;
  location.href = href;
};

export const reload = () => {
  if (redirectInProgress) return;
  if (location.hash) location.reload();
  else location.href = location.href;
};
