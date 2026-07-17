import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './model/book.model';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookeModel: Model<Book>) {}

    async create(input: CreateBookInput): Promise<Book> {
        const created = new this.bookeModel(input);
        return created.save();
    }

    async findAll(): Promise<Book[]> {
        return this.bookeModel.find().exec();
    }

    async findOne(id: any): Promise<Book> {
        const book = await this.bookeModel.findById(id).exec();
        if(!book) throw new NotFoundException('Book not Found');
        return book;
    }

    async update(input: UpdateBookInput): Promise<Book> {
        const existingBook = await this.bookeModel.findById(input.id).exec();
        if(!existingBook) throw new NotFoundException('Book not Found');
        Object.assign(existingBook, input);
        return existingBook.save();
    }

    async remove(id: string): Promise<boolean> {
        const result = await this.bookeModel.findByIdAndDelete(id);
        if(!result) throw new NotFoundException('Book not found');
        return true;
    }
}
