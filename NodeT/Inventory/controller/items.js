const middlewares = require('../helper/middlewares');
const schema = require('../model/schema');
const cron = require('node-cron');

module.exports.Invadd = async (req, res) => {
    const add = new schema.ItemSchema({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        p_id: req.body.p_id
    });

    try {
        const saveData = await add.save();
        if (saveData) res.send(middlewares.responseMiddleWares(undefined, true, "Added successfully!!!"));
        else res.send(middlewares.responseMiddleWares(undefined, false, "Can't be registered!!"));
    }
    catch (err) { res.send(middlewares.responseMiddleWares(undefined, false, err)); }
}

module.exports.ShowAllData = async (req, res) => {
    const { page = req.body.page, limit = req.body.limit } = req.query;
    try {
        const items = await schema.ItemSchema.find({}).sort({ _id: -1 }).limit(limit * 1).skip((page - 1) * limit);
        if (items) res.send(middlewares.responseMiddleWares(items, true, " Retrieved Successfully!!"));
        else res.send(middlewares.responseMiddleWares(undefined, false, " can't Extracted!!"));
    } catch (err) {
        console.log(err);
        res.send(middlewares.responseMiddleWares(undefined, false, err));
    }

}

module.exports.Invupdate = async (req, res) => {
    const _id = req.body._id
    const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        p_id: req.body.p_id
    }
    try {
        const update = await schema.ItemSchema.findByIdAndUpdate(_id, data);

        if (update) res.send(middlewares.responseMiddleWares(undefined, true, "Updated successfully!"));
        else res.send(undefined, false, "Something went wrong!!");
    }
    catch (err) {
        console.log(err);
        res.send(middlewares.responseMiddleWares(undefined, false, err));
    }
}

module.exports.delete = async (req, res) => {
    try {
        const _id = req.body._id;
        const del = await schema.ItemSchema.remove({ _id: _id })
        if (del) res.send(middlewares.responseMiddleWares(undefined, true, "Deleted successfully!"));
        else res.send(middlewares.responseMiddleWares(undefined, false, "Something went wrong!"));
    }
    catch (err) { res.send(middlewares.responseMiddleWares(undefined, false, err)); }
}

module.exports.SingleData = async (req, res) => {
    try {
        const item = await schema.ItemSchema.findById(req.params._id);
        if (item) res.send(middlewares.responseMiddleWares(item, true, "Details::"));
        else res.send(middlewares.responseMiddleWares(undefined, false, "Data can't Retrieved!!!!"));
    }
    catch (err) {
        res.send(middlewares.responseMiddleWares(undefined, false, err));
    }
}



