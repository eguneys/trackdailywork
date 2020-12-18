let { Moderate } = require('../model/fixtures');
let { terminate,
      articlem,
      sessionm,
      draftm } = require('../model');

const beValidLike = (f) => {
  return v => {
    v.fold(f, _ => {
      console.error(`[Fail ${_}]`);
    });
  };
};

const beInvalidLike = f => {
  return v => {
    v.fold(_ => 
      console.error(`[Fail ${_}]`), f);
  };
};

const logErr = err => console.error(err);

module.exports = async () => {
  await session();
  await draft();

  await article();

  terminate().then(_ => {
    process.exit();
  });
};

async function article() {
  
  for (let i = 0; i < 3; i++) {
    await articlem.insert({
      id: `${i}`,
      title: 'title' + i,
      time: 'time' + i,
      content: 'content' + i,
      status: Moderate
    });
  }

  await articlem.accept('1');
  await articlem.deny('2');

  await articlem.moderate().
    then(beValidLike(_ =>
      console.log(_)));

  await articlem.accepted()
    .then(beValidLike(_ =>
      console.log(_)));


  await articlem.drop();
};

async function draft() {
  await draftm.insert({
    id: '123',
    title: 'title'
  }).then(
    beValidLike(_ => {
      console.log(_);
    })
  ).catch(logErr);

  await draftm.insert({
    id: '1234',
    sessionId: 'session123'
  });

  await draftm.getBySessionId('session123')
    .then(beValidLike(_ => 
      console.log(_)
    ));

  await draftm.insert({
    id: '1234'
  });

  await draftm.update('1234', {
    name: 'test'
  }).then(beValidLike(_ => console.log('ok')));

  

  await draftm.drop();
}

async function session() {

  async function pass() {
    
    await sessionm.insert({
      id: '123'
    }).then(
      beValidLike(_ => {
        console.log(_);
      })
    ).catch(logErr);

    await sessionm.insert({
      id: '1234'
    });

    await sessionm.get('1234')
      .then(
        beValidLike(_ => {
          console.log(_);
        })
      ).catch(logErr);


    await sessionm.get('12345')
      .then(
        beInvalidLike(_ => 
          console.log(_)
        )
      ).catch(logErr);

  }


  await pass();

  await sessionm.insert({
    id: '1234'
  });

  await sessionm.update('1234', {
    name: 'test'
  }).then(beValidLike(_ => console.log('ok')));

  await sessionm.update('12345', {
    name: 'test'
  }).then(beInvalidLike(_ => console.log('ok')));

  await sessionm.get('1234').
    then(beValidLike(_ => console.log(_)));

  await sessionm.drop();
};
