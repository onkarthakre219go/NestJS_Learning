import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@Schema()
@ObjectType()
export class Book extends Document {
    @Field(() => ID)
    declare readonly _id: any; // keep compatible with mongoose ObjectId

    @Prop({ required: true })
    @Field()
    title!: string;

    @Prop()
    @Field({ nullable: true })
    description?: string;

    @Prop({ require: true })
    @Field()
    author!: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);