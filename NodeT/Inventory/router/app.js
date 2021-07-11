const router = require('express').Router();

const items = require('../controller/items');
const product = require('../controller/AddPro');



router.post('/addIPro', product.Proadd);
router.put('/IPupdate', product.IPupdate);
router.delete('/Pdelete', product.Pdelete);
router.get('/List', product.List);


router.post('/Invadd', items.Invadd);
router.post('/ShowAllData', items.ShowAllData);
router.put('/Invupdate', items.Invupdate);
router.delete('/Invdelete', items.delete);
router.get('/SingleData/:_id', items.SingleData);







module.exports = router;