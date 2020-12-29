import * as xhr from 'common/xhr';

const onFail = () => tdw.reload();

let data = {
  works: [],
  status: []
};

export const addWork = (play, name) => {

  xhr.text('/work/add', {
    method: 'POST',
    body: JSON.stringify({
      name
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(_ => {
    play.askReload();
  });
};

export const removeWork = (play, workId) => {
  xhr.text(`/work/${workId}/remove`).then(_ => {
    play.askReload();
  });
};

export const doWork = (play, workId) => {
  xhr.text(`/work/${workId}/do`).then(_ => {
    play.askReload();
  });
};

export const reloadNow = (play) => {

  xhr.json(`/work`)
    .then(data => {
      play.reload(data);
      play.redraw();
    }, onFail);
};
