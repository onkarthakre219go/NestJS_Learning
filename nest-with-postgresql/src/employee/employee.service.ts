import { Injectable, NotFoundException } from '@nestjs/common';
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

    async findAll(): Promise<Employee[]> {
        return this.employeeRep.find();
    }

    async findOne(id: number): Promise<Employee> {
        const employee = await this.employeeRep.findOneBy({ id });
        if(!employee){
            throw new NotFoundException(`Employee ID ${id} not found`)
        }
        return employee;
    }

    async update(id: number, updatedData: Partial<Employee>): Promise<Employee> {
        const employee = await this.employeeRep.findOneBy({ id });
        if(!employee){
            throw new NotFoundException(`Employee id ${id} not found`);
        }
        const updated = Object.assign(employee, updatedData) 
        return this.employeeRep.save(updated);
    }

    async delete(id: number): Promise<{ message: string }> {
        const result = await this.employeeRep.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`Employee with ID ${id} Not found`)
        }
        return { message: `Employee with ID ${id} has been deleted sucessfully!`}
    }

    async search(filters: { name?: string; department?: string}): Promise<Employee[]> {
        const query = this.employeeRep.createQueryBuilder('employee');

        if(filters.name) {
            query.andWhere('employee.name ILIKE :name', // ILIKE use for case sensetive search
                { name: `%{filters.name}%`} //  use % for all position match
            )
        }

        if(filters.department) {
            query.andWhere('employee.department = :dept',
                { dept: `{filters.department}`} //  use % for all position match
            )
        }

        return query.getMany(); // to get multiple data.
    }
}
