const express = require('express');
const router = express.Router();
const productsRoutes = require('./products');

router.get('/', (req, res) => {
  res.send('Servidor y DB UP!!! 🚀');
});

router.use('/api/products', productsRoutes);

module.exports = router;
