let { statusm } = require('../model');

let { workm } = require('../model');



module.exports = async function() {

  await work();

};

async function work() {
  
  let one = await workm.insert('test work', 'user1');

  await Promise.all([workm.nextDay(),
                     workm.nextDay(),
                     workm.nextDay()]);

  let res = await workm.byId(one.id);

  console.log('after 3 days', res);


  await workm.drop();

};

async function status() {
  

  let one = await statusm.insert('1', 'user1', 1);

  let list = await statusm.allByUserIdForDay('user1', 1);

  console.log(list);

  await statusm.delete(one.id);

  list = await statusm.allByUserIdForDay('user1', 1);
  
  console.log('after delete', list);

  await statusm.drop();

};
