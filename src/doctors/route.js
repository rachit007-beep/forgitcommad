import express, { Router } from 'express';

import { Controller } from './controller.js';
const docrouter = express.Router();

const controller = new Controller();
// registartion route
docrouter.post('/register',controller.registation)
// login route
docrouter.post('/login',controller.login);


export {docrouter}