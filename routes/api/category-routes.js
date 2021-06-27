const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  try{
    const categoryDataAll = await Category.findAll({
      include: [{model:Product}]
    });
    res.status(200).json(categoryDataAll);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try{
    const categoryDataSingle = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(categoryDataSingle)
    } catch (err) {
      res.status(500).json(err)
    }
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new category
  try{
    const categoryDataNew = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryDataNew)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    const categoryDataUpdate = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id,
        }
      },
    );

    return res.json(categoryDataUpdate)
  } catch (err) {
    res.json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    const CategoryDataDel = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!CategoryDataDel) {
      res.status(404).json({message: 'No cateogry found with that id!'});
      return;
    }
    res.status(200).json(CategoryDataDel)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
