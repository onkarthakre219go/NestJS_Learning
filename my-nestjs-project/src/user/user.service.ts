import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>
) {}

    async createUser(): Promise<User> {
        const newUser = new this.userModel({
            name: 'onkar thakre',
            address: {
                street: '123 Main St',
                city: 'New York'
            }
        });
        return newUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
