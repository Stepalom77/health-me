const {profesionals } = require('../models');

const getProfesionals = async (req, res) => {
  let allProfesionals = [];
  try {
    allProfesionals = await profesionals.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({message: 'There was an error'});
  }
  return res.status(200).json(allProfesionals)
}

const getProfesional = async (req, res,) => {
  let profesionalId = req.params.id;
  let searchedProfesional = null;
  
  try {
    searchedProfesional = await profesionals.findOne({
      where: { id: profesionalId}
    });
  
  }catch(error) {
    console.error(err);
    if(!searchedProfesional) {
      return res.status(404).json({message: "The profesional you are looking for does not exists"})
    } else {
        return res.status(400).json({message: 'There was an error'});
    }
  }
  return res.status(200).json(searchedProfesional);
}



const createProfesional = async (req, res) => {
  let createdProfesional = null;
  try {
    createdProfesional = await profesionals.create(req.body); 
  } catch(err) {
    console.error(err);
        return res.status(400).json({message: 'There was an error'});
  }
  return res.status(200).json(createdProfesional);
}

const updateProfesional = async (req, res) => {
    let profesionalId = req.params.id;
    let {first_name, last_name, email, phone_number, address, years_experience} = req.body;
    try {
      let profesionalToUpdate = await profesionals.findByPk(userId)
      profesionalToUpdate = await profesionals.update({
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone_number: phone_number,
          address: address,
          years_experience: years_experience
      },
        {where: {
          id: profesionalId
        }
      })
    } catch(err) {
      console.error(err);
      if(!profesionalToUpdate) {
        return res.status(404).json({message: 'The profesional you are trying to update does not exists'})
      } else {
        return res.status(400).json({message: 'There was an error'});
      }
    }
    return res.status(200).json(profesionalToUpdate)
  } 

const deleteProfesional = async (req, res) => {
  let profesionalId = req.params.id;
  let deletedProfesional = null;
  try {
    deletedProfesional = await profesionals.destroy({
      where: {
        id: profesionalId
      }
    });
  } catch(err) {
    console.error(err);
    if (!deletedProfesional) {
      return res.status(404).json({message: "The profesional you are trying to delete does not exists"})
    } else {
      return res.status(400).json({message: 'There was an error'});
    }
  }
  return res.status(204).json({message: "The profesional has been deleted"});
}

module.exports = {
  getAll: getProfesionals,
  getOne: getProfesional,
  create: createProfesional,
  update: updateProfesional,
  delete: deleteProfesional
}