const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then(data=>{
    res.json(data)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      msg:"an error occured, sorry about that",
      err:err
    })
  })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id).then(data=>{
    if(data){
      return res.json(data);
    } else {
      res.status(404).json({
        msg:"no record found"
      })
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      msg:"an error occured, sorry about that",
      err:err
    })
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
    
  })
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
