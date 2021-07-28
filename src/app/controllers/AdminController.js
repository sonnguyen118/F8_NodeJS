const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject} = require('../../util/mongoose');

class AdminController {

    index(req, res) {
        res.render('admin/admin');
    }
    
    show(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => 
            res.render('admin/courses',{
            deletedCount,
            courses: mutipleMongooseToObject(courses)}))
        .catch(next);

    }

    //GET :id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(courses => res.render('admin/edit',{
                courses: mongooseToObject(courses)}))
            .catch(next);
    }
    //PUT :id/ update
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('admin/courses'))
    }
    // [DELETE]
    delete(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [THÙNG RÁC - GARBAGE]
    garbage(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('admin/garbage',{
                courses: mutipleMongooseToObject(courses)}))
            .catch(next);
    }
    // khôi phục khóa học // PATCH ~ restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // Xóa thật, xóa khỏi database 
    destroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new AdminController();
