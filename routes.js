let express = require('express');
let multer = require('multer');
let upload = multer();

let router = express.Router();

let home = require('./ctrls/home'),
    editor = require('./ctrls/editor'),
    article = require('./ctrls/article'),
    review = require('./ctrls/review'),
    help = require('./ctrls/help'),
    title = require('./ctrls/title'),
    publish = require('./ctrls/publish');

router.get('/', home);
router.get('/editor', editor);
router.get('/:articleId([a-z|A-Z|0-9]{8})', article);
router.get('/help/hook', help);
router.get('/title/hook', title);
router.get('/review', review.get);
router.post('/review', upload.none(), review.post);
router.get('/publish', publish);

module.exports = router;
