import * as xhr from './xhr';
import * as dom from 'common/dom';

export default function Play(ctx) {

  let showDays = new ShowDays(this);
  let listWork = new ListWork(this);
  let addWork = new AddWork(this);

  this.init = (data) => {
    showDays.init(data);
    listWork.init(data);
  };

  this.askReload = () => {
    xhr.reloadNow(this);
  };

  this.reload = (data) => {
    showDays.init(data);
    listWork.init(data);
  };

  this.redraw = () => {
    showDays.redraw();
    listWork.redraw();
  };
  
  this.wrap = () => {
    
    let $_ = dom.div({ cls: 'tdw-wrap' }, [
      showDays.wrap(),
      listWork.wrap(),
      addWork.wrap()
    ]);

    return $_;
  };
}

function ShowDays(play) {

  let $_,
      $daysSpan;
  let days;

  this.init = (data) => {
    days = data.days;
  };

  this.redraw = () => {
    $daysSpan.innerHTML = `${days}`;
  };

  const onNextDay = dom.fListen('click', e => {
    nextDay();
  });

  const nextDay = () => {
    xhr.nextDay(play);
  };

  this.wrap = () => {
    $_ = dom.div({ cls: 'show-days' }, [
      dom.span({}, `Day #`),
      ($daysSpan = dom.span({}, `${days}`)),
      dom.button({}, 'Next Day', onNextDay)
    ]);

    return $_;
  };
  
}

function ListWorkItem(play) {

  let $_;
  let status;
  let work;

  this.init = (data) => {
    work = data.work;
    status = data.status;
  };

  const onCheck = dom.fListen('click', e => {
    e.preventDefault();

    doWork();
  });

  const onRemove = dom.fListen('click', e => {
    removeWork();
  });

  const doWork = () => {
    xhr.doWork(play, work.id);
  };

  const removeWork = () => {
    xhr.removeWork(play, work.id);
  };

  this.wrap = () => {

    let checkboxOpts = { type: 'checkbox' };

    if (!!status) {
      checkboxOpts.checked = true;
    }

    $_ = dom.tr({ cls: 'work-item' }, [
      dom.td({}, dom.input(checkboxOpts, [], onCheck)),
      dom.td({}, dom.span({}, `${work.name}`)),
      dom.td({}, dom.button({}, 'Remove', onRemove))
    ]);

    return $_;
  };
  
}

function ListWork(play) {

  let $_, $body;
  let works;

  this.init = data => {
    works = data.works.map(work => {
      let status = data.status
          .find(status => status.workId === work.id);

      let res = new ListWorkItem(play);
      res.init({ work, status });
      return res;
    });
  };

  this.redraw = () => {
    dom.replaceChildren($body,
                        works
                        .map(_ => 
                          _.wrap()));
  };

  this.wrap = () => {

    $_ = dom.table({ cls: 'list-work' }, [
      dom.thead({}, [
        dom.tr({}, [
          dom.th({}, 'Done'),
          dom.th({}, 'Name'),
          dom.th({}, 'Options')
        ])
      ]),
      ($body = dom.tbody({}, works.map(_ => _.wrap())))
    ]);
    return $_;
    
  };
}

function AddWork(play) {

  let $text;

  let onEnter = dom.fListen('keypress', e => {
    if (e.keyCode === 13) {
      e.preventDefault();

      addWork($text.value);
    }
  });

  const addWork = name => {
    if (name.length > 5) {
      xhr.addWork(play, name);
    }
    clear();
  };

  const clear = () => {
    $text.value = '';
  };

  this.wrap = () => {

    $text = dom.input({ type: 'text', placeholder: 'Add Work' }, [], onEnter);

    let $_ = dom.div({ cls: 'add-work' }, [
      $text
    ]);

    return $_;
    
  };
  
}
