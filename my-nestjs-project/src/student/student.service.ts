import { Injectable, NotFoundException } from '@nestjs/common';
import { Student, StudentDocument } from './student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>
    ) {}

    async createStudent(data: Partial<Student>): Promise<Student> {
        const newStudent = new this.studentModel(data);
        return newStudent.save();
    }

    async getAllStudents(): Promise<Student[]> {
        return this.studentModel.find().exec(); // exec() is used to execute the query and return a promise
    }

    async getStudentById(id: string): Promise<Student | null> {
        return this.studentModel.findById(id).exec();
    }

    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        // return this.studentModel.findByIdAndUpdate(id, data, {new: true});
        const updated = await this.studentModel.findByIdAndUpdate(id, {
            name: data.name ?? null,
            age: data.age ?? null,
            email: data.email ?? null,
        }, { overwrite: true, new: true }).exec();
        return updated;
    }

    async patchStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id, data, {new: true});
    }

    async deleteStudent(id: string): Promise<Student | null> {
        return this.studentModel.findByIdAndDelete(id).exec();
    }

   /*  private students = [
        { id: 1, name: 'Jonh Doe', age: 27 },
        { id: 2, name: 'Bob Doe', age: 25 },
        { id: 3, name: 'sam Doe', age: 28 },
    ]

    getAllStudents() {
        return this.students
    }

    getStudentById(id: number) {
        const student = this.students.find((student) => student.id === id);
        if(!student) throw new NotFoundException('Student not found');
        return student;
    }

    //POST
    createStudent(data: { name: string; age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data,
        }
        this.students.push(newStudent);
        return newStudent;
    }

    //PUT
    updateStudent(id: number, data: { name?: string; age?: number }) {
        const student = this.getStudentById(id);
        if(!student) throw new NotFoundException('Student not found');
        const updatedStudent = { ...student, ...data };
        this.students = this.students.map((s) => (s.id === id ? updatedStudent : s));
        return updatedStudent;
    }

    //PATCH
    patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
        const student  =  this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    //DELETE
    deleteStudent(id: number) {
        const student = this.getStudentById(id);
        if(!student) throw new NotFoundException('Student not found');
        this.students = this.students.filter((s) => s.id !== id);
        return student;
    } */
}