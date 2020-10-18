let express = require('express');
let multer = require('multer');
let upload = multer();

let router = express.Router();

let home = require('./ctrls/home'),
    editor = require('./ctrls/editor'),
    article = require('./ctrls/article'),
    review = require('./ctrls/review'),
    help = require('./ctrls/help'),
    title = require('./ctrls/title');

router.get('/', home);
router.get('/editor', editor);
router.get('/:article{8}', article);
router.get('/help/hook', help);
router.get('/title/hook', title);
router.get('/review', review.get);
router.post('/review', upload.none(), review.post);

module.exports = router;
