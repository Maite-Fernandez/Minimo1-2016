import mongoose, { Schema, Document} from 'mongoose';
import Student, { IStudent } from './student';

// Model of the object that is saved in the BBDD of MongoDB
const subjectSchema = new Schema({
    name: {
        type: String
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: Student
    }]
});

//Interface to treat the reply as a document
export interface ISubject extends Document {
    nombre: string;
    //Relation to the subject collection
    students: IStudent['_id']; 
    
}

//Export the model to use it from outside
export default mongoose.model<ISubject>('Subject', subjectSchema);