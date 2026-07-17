import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';
import { CreateBookInput } from '../dto/create-book.input';
import { UpdateBookInput } from '../dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) {}

    @Query(() => [Book], { name: 'getAllBooks'}) // this is graphql Decorator use to fetch data
    async findAll() {
        return this.bookService.findAll();
    }

    @Query(() => Book, { name: 'getBook'}) // this is graphql Decorator use to fetch data
    async findOne(@Args('id', { type: () => String }) id: any) {
        return this.bookService.findOne(id);
    }

    @Mutation(() => Book) // this is use for create, update, remove not for get data.
    async createBook(@Args('input') input: CreateBookInput) {
        return this.bookService.create(input);
    }

    @Mutation(() => Book) // this is use for update, remove not for get data.
    async updateBook(@Args('input') input: UpdateBookInput) {
        return this.bookService.update(input);
    }

    @Mutation(() => Boolean) // this is use for update, remove not for get data.
    async deleteBook(@Args('id', {type: () => String}) id: any) {
        return this.bookService.remove(id);
    }
}
