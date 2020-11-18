//Interfaces
import mongoose, { Schema, Document} from 'mongoose';

//Interface to treat the reply as a document
export interface IPhone extends Document {
    name: string;
    number: string;

}

// Model of the object that is saved in the BBDD of MongoDB
const phoneSchema = new Schema({
    name: {
        type: String
    },
    number: {
        type: String
    }
});

//Export the model to use it from outside
export default mongoose.model<IPhone>('Phone', phoneSchema);