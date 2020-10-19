export const json = (url, init) => 
fetch(url, {
  ...init
}).then(res => {
  if (res.ok) return res.json();
  throw res.statusText;
});

export const text = (url, init) =>
fetch(url, {
  ...init,
}).then(res => {
  if (res.ok) return res.text();
  throw res.statusText;
});

export const form = (data) => {
  const formData = new FormData();
  for (const k of Object.keys(data)) 
    formData.append(k, data[k]);
  return formData;
};

export const formToXhr = $_ =>
json($_.action, {
  method: $_.method,
  body: new FormData($_)
});
