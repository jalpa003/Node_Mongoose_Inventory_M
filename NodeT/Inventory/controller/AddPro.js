const middlewares = require('../helper/middlewares');
const Products = require('../model/Iproduct');

module.exports.Proadd = async (req, res) => {
    const add = new Products.Iproduct({
        Pname: req.body.Pname,
        PQunatity: req.body.PQunatity,
        Status: req.body.Status,
        ExpiryDate: req.body.ExpiryDate
    });

    try {
        const saveData = await add.save();
        if (saveData) res.send(middlewares.responseMiddleWares(undefined, true, "Product registered successfully!!!"));
        else res.send(middlewares.responseMiddleWares(undefined, false, "Product can't be registered!!"));
    }
    catch (err) { res.send(middlewares.responseMiddleWares(undefined, false, err)); }
}

module.exports.IPupdate = async (req, res) => {
    const _id = req.body._id
    const data = {
        Pname: req.body.Pname,
        PQunatity: req.body.PQunatity,
        Status: req.body.Status,
        ExpiryDate: req.body.ExpiryDate
    }
    try {
        const update = await Products.Iproduct.findByIdAndUpdate(_id, data);

        if (update) res.send(middlewares.responseMiddleWares(undefined, true, "Product Updated successfully!"));
        else res.send(undefined, false, "Something went wrong!!");
    }
    catch (err) {
        console.log(err);
        res.send(middlewares.responseMiddleWares(undefined, false, err));
    }
}

module.exports.Pdelete = async (req, res) => {
    try {
        const _id = req.body._id;
        const del = await Products.Iproduct.remove({ _id: _id })
        if (del) res.send(middlewares.responseMiddleWares(undefined, true, "Products deleted successfully!"));
        else res.send(middlewares.responseMiddleWares(undefined, false, "Something went wrong!"));
    }
    catch (err) { res.send(middlewares.responseMiddleWares(undefined, false, err)); }
}

module.exports.List = async (req, res) => {
    try {
        const product_list = await Products.Iproduct.find({ "Status": "Available" });
        if (product_list.length > 0) res.send(middlewares.responseMiddleWares(product_list, true, "data extracted"));
        else res.send(middlewares.responseMiddleWares(undefined, false, "data not extracted"));
    }
    catch (err) { res.send(middlewares.responseMiddleWares(undefined, false, err)); }
}