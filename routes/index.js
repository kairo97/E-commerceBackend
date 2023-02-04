const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const categoryRoutes = require('./api/category-routes')
router.use('/api/categories', categoryRoutes);

const productRoutes = require('./api/product-routes')
router.use('/api/products', productRoutes);

const tagRoutes = require('./api/tag-routes')
router.use('/api/tags', tagRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;