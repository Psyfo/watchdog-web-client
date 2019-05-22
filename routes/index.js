var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'About'
    });
});

router.get('/services', (req, res, next) => {
    res.render('services', {
        title: 'Services'
    });
});

router.get('/people', (req, res, next) => {
    res.render('people', {
        title: 'People'
    });
});

router.get('/contact-us', (req, res, next) => {
    res.render('contact-us', {
        title: 'Contact Us'
    });
});

router.get('/previous-work', (req, res, next) => {
    res.render('previous-work', {
        title: 'Previous Work'
    });
});

module.exports = router;
