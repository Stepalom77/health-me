const {macros } = require('../models');

const getMacros = async (req, res) => {
  let allMacros = [];
  try {
    allMacros = await macros.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({message: 'There was an error'});
  }
  return res.status(200).json(allMacros)
}

const getOneMacros = async (req, res,) => {
  let macrosId = req.params.id;
  let searchedMacros = null;
  
  try {
    searchedMacros = await macros.findOne({
      where: { id: macrosId}
    });
  
  }catch(error) {
    console.error(err);
    if(!searchedMacros) {
      return res.status(404).json({message: "The macros you are looking for does not exists"})
    } else {
        return res.status(400).json({message: 'There was an error'});
    }
  }
  return res.status(200).json(searchedMacros);
}



const createMacros = async (req, res) => {
  let createdMacros = null;
  try {
    createdMacros = await macros.create(req.body); 
  } catch(err) {
    console.error(err);
        return res.status(400).json({message: 'There was an error'});
  }
  return res.status(200).json(createdMacros);
}

const updateMacros = async (req, res) => {
    let macrosId = req.params.id;
    let {calories, protein, carbohidrates, fat} = req.body;
    try {
      let macrosToUpdate = await macros.findByPk(macrosId)
      macrosToUpdate = await macros.update({
          calories: calories,
          protein: protein,
          carbohidrates: carbohidrates,
          fat: fat
      },
        {where: {
          id: macrosId
        }
      })
    } catch(err) {
      console.error(err);
      if(!macrosToUpdate) {
        return res.status(404).json({message: 'The macros you are trying to update does not exists'})
      } else {
        return res.status(400).json({message: 'There was an error'});
      }
    }
    return res.status(200).json(macrosToUpdate)
  } 

const deleteMacros = async (req, res) => {
  let macrosId = req.params.id;
  let deletedMacros = null;
  try {
    deletedMacros = await macros.destroy({
      where: {
        id: macrosId
      }
    });
  } catch(err) {
    console.error(err);
    if (!deletedMacros) {
      return res.status(404).json({message: "The macros you are trying to delete does not exists"})
    } else {
      return res.status(400).json({message: 'There was an error'});
    }
  }
  return res.status(204).json({message: "The macros has been deleted"});
}

module.exports = {
  getAll: getMacros,
  getOne: getOneMacros,
  create: createMacros,
  update: updateMacros,
  delete: deleteMacros
}