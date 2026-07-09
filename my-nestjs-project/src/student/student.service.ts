import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
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
    }
}