const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  try{
    const tagDataAll = await Tag.findAll({
      include: [{model:Product, through:ProductTag}]
    });
    res.status(200).json(tagDataAll);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  try{
    const tagDataSingle = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through:ProductTag}]
    });
    res.status(200).json(tagDataSingle)
    } catch (err) {
      res.status(500).json(err)
    }
  // be sure to include its associated Product data
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const tagDataNew= await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagDataNew)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagDataUpdate = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id,
        }
      },
    );

    return res.json(tagDataUpdate)
  } catch (err) {
    res.json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try{
    const tagDataDel = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!tagDataDel) {
      res.status(404).json({message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json(tagDataDel)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
