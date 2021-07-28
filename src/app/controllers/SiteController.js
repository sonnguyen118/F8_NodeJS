const Course = require('../models/Course');
const { mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {

    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    // // [GET] /
    // index(req, res) {
    //     res.render('home');
    // }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
    courses(req, res) {
        res.render('courses');
    }
}

module.exports = new SiteController();
