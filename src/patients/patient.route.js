import express from 'express';
import { PatientController } from './patinet.controller.js';
import { jwtToken } from '../middleware/jwt.Auth.js';

const patientRouter = express.Router();
// instance of the class of patientcontroller
 const preg = new PatientController();
//  route for registring a new patient 
patientRouter.post('/registration',jwtToken,preg.registration);


export {patientRouter};