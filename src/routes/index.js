const express = require('express');

const router = express.Router();
const productsRoutes = require('./products');
const provRoutes = require('./proveedores');

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.use('/api/products', productsRoutes);
router.use('/api/prov', provRoutes);

module.exports = router;
