import { Request, Response } from 'express';
import { StudentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
 try{

    const student = req.body;

    // will call services
    const result = await StudentServices.createStudentIntoDB(student);
  
    //send response
    res.status(200).json({
      success: true,
      massage: 'student is created is successfully',
    });

 }catch(error){
    console.log(error);
 }
};

export const StudentController = {
    createStudent
}