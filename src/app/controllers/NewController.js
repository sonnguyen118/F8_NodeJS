class NewController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('OKE r nhá baby !!! <3');
    }
}

module.exports = new NewController();
