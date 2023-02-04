const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then(data=>{
    res.json(data)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      msg:"an error occured, sorry about that",
      err:err
    })
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findByPk(rew.params.id,{
    include:[{
      model:Product,
      include:[Category]
    }]
  }).then(data=>{
    if(data){
      return res.json(data);
    } else {
      res.status(404).json({
        msg: "no record found"
      })
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      msg: "an error occured, sorry about that",
      err:err
    })
  })
  
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
