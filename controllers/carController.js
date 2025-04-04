import asyncHandler from '../utils/asyncHandler.js'
import Car from '../models/CarModel.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customErrors.js'


export const getMakes = asyncHandler(async (req, res) => {
    try{
        const makes = await Car.distinct('make');
        res.json(makes);
    } catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Server error'});
    }
});

export const addCar = asyncHandler(async (req, res) => {
    const car = await Car.create(req.body);
    res.status(StatusCodes.CREATED).json({ car })
}); 

export const getModels = asyncHandler(async (req,res) => {
    const { make } = req.params;
    const models = await Car.find({ make }).distinct('model');
    if(!models || models.length === 0) throw new NotFoundError(`No models found for this make: ${make}`)
    res.json(models);
});