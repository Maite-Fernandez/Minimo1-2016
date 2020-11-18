import {Router} from "express"; 
import studentController from '../controllers/student.controller'

//Router to manage the API endpoints
const router = Router();

// HTTP Requests (route, controller function)
router.get('get/:name', studentController.getStudent);
router.post('/add', studentController.postStudent);
router.get('/get', studentController.getStudents);

//Export router to use the routes in app.ts
export default router;