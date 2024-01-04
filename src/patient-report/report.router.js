import express from "express";
import { jwtToken } from "../middleware/jwt.Auth.js";
import { ReportController } from "./reportController.js";

const reportRouter = express.Router();
// instance of reportcontroller
const reportcontroller = new ReportController();
// route for creating a reports
reportRouter.post('/:id/create_report',jwtToken,reportcontroller.add);
// route for getting all reports of specific patient
reportRouter.get('/:id/all_reports',jwtToken,reportcontroller.getAll);
// route for getting all reports of Patients with status
reportRouter.get('/reports/:status',jwtToken,reportcontroller.getStatus);

export {reportRouter}