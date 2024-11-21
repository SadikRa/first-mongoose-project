import { Schema, model, connect } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, require: true },
  fatherOccupation: { type: String, require: true },
  fatherContactNo: { type: String, require: true },
  motherName: { type: String, require: true },
  motherOccupation: { type: String, require: true },
  motherContactNo: { type: String, require: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: UserNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  email: { type: String },
  avatar: { type: String },
  emergencyContactNo: { type: String },
  bloodGroup: ['A+', 'A-', 'O+'],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: {
    name: { type: String },
    occupation: { type: String },
    address: { type: String },
    contactNo: { type: String },
  },
  profileImg: String,
  isActive: ['Active', 'inActive'],
});

// 3. Create a Model.
const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
