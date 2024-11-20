import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  avatar?: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+ | A- | O+';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
  isActive: "'Active' | 'inActive'";
};
