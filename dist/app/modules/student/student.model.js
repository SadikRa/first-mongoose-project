"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserNameSchema = new mongoose_1.Schema({
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
const guardianSchema = new mongoose_1.Schema({
    fatherName: { type: String, require: true },
    fatherOccupation: { type: String, require: true },
    fatherContactNo: { type: String, require: true },
    motherName: { type: String, require: true },
    motherOccupation: { type: String, require: true },
    motherContactNo: { type: String, require: true },
});
const studentSchema = new mongoose_1.Schema({
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
const StudentModel = (0, mongoose_1.model)('Student', studentSchema);
exports.default = StudentModel;
