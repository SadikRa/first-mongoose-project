"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_services_1 = require("./student.services");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        // will call services
        const result = yield student_services_1.StudentServices.createStudentIntoDB(student);
        //send response
        res.status(200).json({
            success: true,
            massage: 'student is created is successfully',
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.StudentController = {
    createStudent
};
