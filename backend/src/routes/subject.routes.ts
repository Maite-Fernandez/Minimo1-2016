import {Router} from "express"; 
import subjectController from '../controllers/subject.controller'

//Router to manage the API endpoints
const router = Router();

// HTTP Requests (route, controller function)
router.get('/all', subjectController.getSubjects);
router.get('/:name', subjectController.getSubject);
router.post('/add', subjectController.postSubject);
router.post('/addStudent/:subject',subjectController.addStudent);

//Export router to use the routes in app.ts
export default router;