const {food } = require('../models');

const getFood = async (req, res) => {
  let allFood = [];
  try {
    allFood = await food.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({message: 'There was an error'});
  }
  return res.status(200).json(allFood)
}

const getOneFood = async (req, res,) => {
  let foodId = req.params.id;
  let searchedFood = null;
  
  try {
    searchedFood = await food.findOne({
      where: { id: foodId}
    });
  
  }catch(error) {
    console.error(err);
    if(!searchedFood) {
      return res.status(404).json({message: "The food you are looking for does not exists"})
    } else {
        return res.status(400).json({message: 'There was an error'});
    }
  }
  return res.status(200).json(searchedFood);
}



const createFood = async (req, res) => {
  let createdFood = null;
  try {
    createdFood = await food.create(req.body); 
  } catch(err) {
    console.error(err);
        return res.status(400).json({message: 'There was an error'});
  }
  return res.status(200).json(createdFood);
}

const updateFood = async (req, res) => {
    let foodId = req.params.id;
    let {name, calories, protein, carbohidrates, fat} = req.body;
    try {
      let foodToUpdate = await food.findByPk(macrosId)
      foodToUpdate = await food.update({
          name: name,
          calories: calories,
          protein: protein,
          carbohidrates: carbohidrates,
          fat: fat
      },
        {where: {
          id: foodId
        }
      })
      return res.status(200).json(foodToUpdate);
    } catch(err) {
      console.error(err);
      if(!foodToUpdate) {
        return res.status(404).json({message: 'The food you are trying to update does not exists'})
      } else {
        return res.status(400).json({message: 'There was an error'});
      }
    }
  } 

const deleteFood = async (req, res) => {
  let foodId = req.params.id;
  let deletedFood = null;
  try {
    deletedFood = await food.destroy({
      where: {
        id: foodId
      }
    });
  } catch(err) {
    console.error(err);
    if (!deletedFood) {
      return res.status(404).json({message: "The food you are trying to delete does not exists"})
    } else {
      return res.status(400).json({message: 'There was an error'});
    }
  }
  return res.status(204).json({message: "The food has been deleted"});
}

module.exports = {
  getAll: getFood,
  getOne: getOneFood,
  create: createFood,
  update: updateFood,
  delete: deleteFood
}