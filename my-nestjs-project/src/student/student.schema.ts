import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ timestamps: true }) // Add timestamps option to automatically manage createdAt and updatedAt fields
export class Student {
  @Prop({ required: true }) // Add required option to make the name field mandatory
  name!: string;

  @Prop({ required: true }) // Add required option to make the name field mandatory
  age!: number;

  @Prop() // Add required option to make the name field mandatory
  email?: string;

}

export const StudentSchema = SchemaFactory.createForClass(Student);