import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './book/book.service';
import { BookResolver } from './book/resolvers/book.resolver';
import { BookModule } from './book/book.module';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    BookModule],
  controllers: [AppController],
  providers: [AppService, BookService, BookResolver],
})
export class AppModule {}
