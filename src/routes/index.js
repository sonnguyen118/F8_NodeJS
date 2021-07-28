const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const adminRouter = require('./admin')

function route(app) {
    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);
    
    app.use('/admin', adminRouter);

    app.use('/', siteRouter);

}

module.exports = route;
