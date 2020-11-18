//Interfaces
import mongoose, { Schema, Document} from 'mongoose';
import Phone, { IPhone } from './phone';

//Interface to treat the reply as a document
export interface IStudent extends Document {
    name: string;
    address: string;
    //Relation to the phone collection
    phones: Array<IPhone>; 
}

// Model of the object that is saved in the BBDD of MongoDB
const studentSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phones: [{
        type: Object,
        ref: Phone
    }]
});

//Export the model to use it from outside
export default mongoose.model<IStudent>('Student', studentSchema);