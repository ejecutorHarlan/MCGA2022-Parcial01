const router = require("express").Router();
const proveedores = require('../controllers/proveedores');

router.get('/', proveedores.getAll)
router.post('/',  proveedores.create);
router.put('/:id',  proveedores.update);
router.patch('/:id', proveedores.toDelete);
router.patch('/alta/:id', proveedores.alta);

module.exports = router

