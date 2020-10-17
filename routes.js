let express = require('express');
let router = express.Router();

let home = require('./ctrls/home'),
    editor = require('./ctrls/editor'),
    article = require('./ctrls/article'),
    help = require('./ctrls/help');

router.get('/', home);
router.get('/editor', editor);
router.get('/:article{8}', article);
router.get('/help/hook', help);

module.exports = router;
