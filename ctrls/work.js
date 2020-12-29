let html = require('../html');

let { reqToCtx } = require('./cis');
let workApi = require('../modules/work');

let { userm, workm, statusm } = require('../model');

function Work(env) {

  this.list = async (req, res, next) => {

    let ctx = await reqToCtx(req);

    let data = await workApi.jsonView(ctx.user.id);

    res.send(data);
  };

  this.add = async (req, res, next) => {

    let ctx = await reqToCtx(req);

    if (!ctx.user) {
      res.send({ error: 'unauthorized' });
      return;
    }

    workApi.validate(req.body)
      .fold(async _ => {

        let { name } = req.body;

        await workm.insert(name, ctx.user.id);

        res.send({ ok: true });
        
      }, err => {
        res.send({ error: err });
      });


  };


  this.remove = async (req, res, next) => {
    let ctx = await reqToCtx(req);

    let { workId } = req.params;
    let work = await workm.byId(workId);


    if (!ctx.user || work.userId !== ctx.user.id) {
      res.send({ error: 'unauthorized' });
      return;
    }

    await workm.delete(workId);

    res.send({ok: true });
  };


  this.do = async (req, res, next) => {
    let ctx = await reqToCtx(req);

    let { workId } = req.params;
    let work = await workm.byId(workId);

    if (!ctx.user || work.userId !== ctx.user.id) {
      res.send({ error: 'unauthorized' });
      return;
    }

    let { days } = await userm.byId(ctx.user.id);

    let existing = await statusm.byWorkIdForDay(workId, days);

    if (existing) {
      await statusm.delete(existing.id);
      res.send({ ok: true, deleted: true });
      return;
    } else {
      await statusm.insert(workId, ctx.user.id, days);
      res.send({ ok: true });
      return;
    }
  };

};

module.exports = env => {
  return new Work(env);
};
