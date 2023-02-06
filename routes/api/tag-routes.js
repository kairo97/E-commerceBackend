const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({

    include:[{
      model:Product,
      include:[Tag]
    }]
  }).then(data=>{
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
    include:[{
      model:Product,
    }]
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
    tagName:req.body.tagName,
    tagId: req.body.tagId
  },{
    include:[{
      model:Product
    }]
  }).then(data=>{
    res.status(201).json(data)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      msg:"an error occured, sorry about that",
      err:err
    })
  })
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update({
    tagName:req.body.tagName,
    tagId:req.body.tagName
  },{
    where:{
      id:req.params.id
    }
  }).then(data=>{
    if(data[0]){
      return res.json(data)
    } else {
      return res.status(404).json({msg:"no such record"})
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      msg:"an error occured, sorry about that",
      err:err
    })
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id
    }
  }).then(data=>{
    if (data){
      return res.json(data)
    } else {
      return res.status(404).json({msg:"no such record"})
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      msg:"an error occured",
      err:err
    })
  })
  // delete on tag by its `id` value
});

module.exports = router;
