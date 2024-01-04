import express from 'express';
import swagger from 'swagger-ui-express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectdb } from './src/config/mongodb.js';
import { docrouter } from './src/doctors/route.js';
import { patientRouter } from './src/patients/patient.route.js';
import { reportRouter } from './src/patient-report/report.router.js';
import apidocs from './swagger.json' assert {type:'json'};


dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json);
app.use(express.json())
// api for swagger
app.use('/api/docs',
 swagger.serve,swagger.setup(apidocs)
)
// middleware for registation and login for doctor
app.use('/api/doc',docrouter)
// middleware for patient registation
app.use('/api/patients',patientRouter);
// middleware for patient reports
app.use('/api/patients',reportRouter);

// middleware for if no url is matched
app.use((req,res)=>{
    res.status(404).send("<h1>404</h1><h3>Api not found!</h3>s")
})
// for listening a server
app.listen(process.env.Port,()=>{
    connectdb();
    console.log('Server is up and running on port 4000');
    
})