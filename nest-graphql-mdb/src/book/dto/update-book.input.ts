// for update the inputs
import { CreateBookInput } from "./create-book.input"; // best practice to use create dto
import { InputType, Field, PartialType, ID } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateBookInput extends PartialType
(CreateBookInput) {
    @Field(() => ID)
    @IsNotEmpty()
    id: any
}