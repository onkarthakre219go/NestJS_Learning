import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(
         @InjectRepository(Employee) 
         private employeeRep: Repository<Employee>
    ) {} 

    async create(employeeData: Partial<Employee>): Promise<Employee> {
        const employee = this.employeeRep.create(employeeData);
        return this.employeeRep.save(employee);
    }
}
