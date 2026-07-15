import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    async createEmployee(@Body() body: Partial<Employee>): Promise<Employee> {
        return this.employeeService.create(body);
    }

    @Get()
    async findAll(): Promise<Employee[]> {
        return this.employeeService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Employee> {
        return this.employeeService.findOne(id);
    } 

    @Put(':id')
    async updatedEmployee(
        @Param('id') id: number,
        @Body() body: Partial<Employee>,
    ): Promise<Employee>{
        return this.employeeService.update(id, body);
    }

    @Delete(':id')
    async deleteEmployee(
        @Param('id') id: number
    ): Promise<{ message: string }> {
        return this.employeeService.delete(id);
    }
}
