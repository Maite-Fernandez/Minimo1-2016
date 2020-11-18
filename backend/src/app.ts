//Import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';

//Import files of routes
import studentRoutes from './routes/student.routes'
import subjectRoutes from './routes/subject.routes'

//Inicializing express
const app = express();

//Configuration
//If environment vairable PORT use that port if not use 3000
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

//Call the routes of the API
app.use('/student',studentRoutes);
app.use('/subject',subjectRoutes);

//Export file as app
export default app;
