let Project = require('../project');
let { envm, terminate } = require('../model');

let env = require('./env');
let status = require('./status');

(async () => {

  let { name } = await envm.envByKey('project-name');

  console.log(`Connected to [${name}]`);

  if (Project.name !== name) {
    console.error(`Wrong Project.`);
    process.exit(2);
  }

  // model();
  await env();

  await status();

  terminate();

  process.exit();
})();
