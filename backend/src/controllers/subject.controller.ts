import { Request, Response} from "express";
import Student from "../models/student";
import Subject from "../models/subject"

//Get all subjects
const getSubjects= async(req:Request, res:Response)=>{

    //Retrieve all subjects and the students in them (populate) from the database
    await Subject.find({}).populate('students').then((data)=>{

        //Display data obatained
        console.log(data);

        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
// Get a subject by name
const getSubject= async(req:Request, res:Response) =>{
    
    //Find a subject by name then return the subject and the students in it (populate)
    await Subject.find({"name":req.params.name}).populate('students').then((data)=>{

        //Display data obatained
        console.log(data);

        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//Add new subject
const postSubject = async (req: Request, res: Response)=>{

    //Display request
    console.log(req.body);

    //Create a new subject entity with the data found in request
    const subject = new Subject({
        "name": req.body.name,
        "students": req.body.students
    });

    //Save new subject in the database
    await subject.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//Add a student to a subject
const addStudent = async(req: Request, res: Response) =>{

    //Display request
    console.log(req.body);

    //Set variables for the data found in the request body
    let subject = req.params.subject;

    //Create a new student entity with the data found in request
    let student = new Student({ 
        "name":  req.body.name, 
        "address": req.body.address, 
        "phones": req.body.phones
     }); 

    //Look for the student in the database
    let studentdata =await Student.findOne({name: student.name})

    //If the student is not in the database then save it
    if (!studentdata) { 
        await student.save().then((data) => { 
            studentdata = data;
        });
    }
    //Add student to subject
    await Subject.updateOne({"name": subject}, {$addToSet: {students: studentdata?._id}}).then(result => { 
        if (result.nModified == 1) { 
            console.log("Student added successfully"); 
            res.status(201).send({message: 'Student added successfully'}); 
        } else { 
            res.status(409).json('Student was already added!') 
    } }).catch((err) => { 
        console.log("error ", err); 
        res.status(500).json(err); 
    }); 
}

//Export the functions to use them from outside
export default { getSubjects, getSubject, postSubject, addStudent };