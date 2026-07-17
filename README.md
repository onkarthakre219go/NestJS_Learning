first thing you need to install Nest JS globally
npm i -g @nestjs/cli

To create new Project 
nest new project-name.

-------------------------------------
@Controller 
- receive request and give response
- It handle incomping HTTP requests. They define routes (e.g GET, POST, PUT, DELETE) Bridge between client and business logic (services).
- Organize API endpoints clearly and modularly.
- Help separate concerns: routing vs business logic.
- Make code scalable and maintainable.
- Improve code readability with clean structure.
- @Controller('user') where user is base route like /user

Decorators
- Special functions that add metadata to classes or methods.
- start with @symbol (e.g. @Controller, @Get()).
- Tell NestJS how to treat the class or method.
- Used for routing, dependency injection, validation, etc.

nest cli command
to generate controller
nest g c <controller name>

Services
- A Typescript class with logic like calculation, data access. etc.
- Used to write business logic in a clean and reusable way.
- They are marked with @Injectable() so NestJS can use them.
- To separate logic from controllers.
- Service can be reused in multiple places.
- Inject services into ccontrollers using constructor injection.
- services are part of the Dependency Injection system.
- Logic like fetching data, calculations, or API calls goes inside services.
- Providers are for any class that can be injected and reused, registered in the module to be used via Dependency Injection.

Modules
- A container where we keep related controllers, services, and providers for our application.
- Core part of NestJS architecture.
- Every NestJS app has at least one module.

Dependency Injection
- It is a mechanism where the framework automatically provides the required dependencies - without creating them manually.
- @Injectable() Tell NestJS how to treat a class, method, or variable.
- Used for routing, injecting services, and more.
- Benifits: It makes the code reusable and clean , testing easier, It promotes loose coupling, improves readability and maintainability.

REST
- Represatational state Transfer
- It is a type of API which uses HTTP Methods and certain rules (GET,PUT,PATCH,DELETE)

** We can only test get HTTP method on browser **

DTO (Data Transfer Object)
- An object that carries data between layers (like from client to backend)
- Used to define the shape of incoming request data.
- Ensures only required data is passed (security + validation).

Interface
- Interface define the structure type of an object.
- Help write clean, structured, type-safe code
- Used for both request DTO and response object.

* class-validator - Validate for TS property
* class-transformer - Convert Plan JSON format received from client into class Object
* Why class validator require because TS remove validation at runtime so we explicitly req. in DTO.

Custom Pipes
- Pipes are used to transform or validate incoming data.
- NestJS allows you to create your own Custom pipes
- It can be used as custom validation, data transformation, or business logic filtering.
Imp
- A Pipe runs before the data hits the route handler (controller method).
- You can apply pipes at method level, controller level, or globally.
- Custom Pipes implement the Pipe Transform interface.

Protecting Routes
- It means restricting access to specific API routes.
- Only authorized users (like logged-in users or admins) can access them.

Guards (@UseGuard('guardname'))
- Guards are classes that implement logic to decide whether a request is allowed or not.
- They implement the CanActivate interface and run before the route handler.
- Mostly used for authentication and authorization.

RBAC
- create custom decorator by using SetMetadata and enum for roles
- SetMetadata:is used to attach custom metadata to a class or method.
- Reflector: is used to read the metadata added by SetMetadata.

Exception filter
- handler errors and exceptions in a centralized way.
- help in managing app-wide error handling logic cleanly and consistently.
- Filter can be applied at method-level, controller level, or globally (in main.ts)
- @Catch() decorator is used to define which exception the filter will handle.

Middleware
- Middleware is function which run before the request reaches the controller.
- Logging incoming requests
- Authentication token (e.g. checking JWT)
- Request transformation (e.g. converting string to numbers)
- Blocking or redirecting requests Setting headers.

Lifecycle Events
- Special methods/hooks provide by NestJS.
- Automatically called at different stages of a module/service/component's life
- Used to perform actions during creation or destruction.
- Useful for tasks like DB connections, logging, resource cleanup, etc.

1. OnModuleInit() -> Called when the module is initialized.
2. onModuleDestroy() -> Called before the module is destroyed.
3. afterModuleInit() (optional) -> Called after all modules are initialized.
4. onApplicationBootstrap() -> When app is fully bootstrapped.
5. onApplicationShutdown() -> Called when app is shutting down.

How to configure Envirnoment variable in NESTJS
- use command npm i @nestjs/config

Mongo DB
- Store data in JSON-like document
- It is document-based, not table-based
- to install use npm i @nestjs/mongoose mongoose

Mongo DB atlas - cloud database

Embedding
- Releationship using Embedding (Storing related data inside the same document)

Cons of Embedding
- If Project is scaling large then use Referencing

- 2nd method is referencing (Storing related data in sepatate documents and linking by IDs).
- IMP: If you don't use populate method then it only return ID not complete entities.

Relationships
- One-to-One Relationship (one data linked to one entity)
- One-to-Many Relationship (one Auther can write many book)
- Many-to-Many Relationship (Multiple couses with Multiple student buy)

- 1-to-m - type: [propName] should be in array.

- Imp -> M-to-M relationship can not use embedding only Referencing will do.


PostgreSQL
- It is a powerful, open-source relational database system.
- It stores data in rows and tables using SQL (Structured Query Language).
- It's known for stability, performance, and data integrity.

why PostgreSQL
- It's free and open-source
- Supports complex queries, joins, transactions, indexing.
- Great choice for scalable and secure apps.
- widely used in startups to enterprise-level apps.

Power of PostgreSQL (SQL + NoSQL hybrid)
- It's relational like MySQL (tables, schemas, joins). But also supports NoSQL features like: JSON and JSONB columns
- Full text search
- Arrays and custom data types
- So, it gives you the power of both SQL and NoSQL in one system.

TypeORM
- TypeORM is an Object Relational Mapper for TypeScript.
- It connects your NestJS app with PostgreSQL using OOP-style code.
- You define tables as classes using decorators like @Entity, @Column, etc.
- It makes database queries easier, readable, and type-safe.

Supabase
- Supabase is the Postgres development platform. just like firebase (noSql).

Packages require for PostgreSQL
- npm i @nestjs/config
- npm i @nestjs/typeorm typeorm pg
  where pg is driver of typeorm.

Authentication
- Verifying who the user is.
- Ex. Logging into your Gmail using email & password.
- It checks if you are a real & registered user.

Authorization
- Decides what the authenticated user is allowed to do.
- JWT : A compact, URL-safe token used to securely transmit information between parties.

Use these packages for JWT
- npm i @nest/jwt passport-jwt @nestjs/passport passport 
- passport is engine for jwt support

- npm i bcrypt and npm i --save-dev @types/bcrypt

- imp if you don't want to create extra directory in you folder use --flat
  ex. nest g class auth/user.schema --flat
  
GraphQL
- Modern approach to handle API, Query language for APIs.
- Developed by Facebook in 2012, relased publicly in 2015.
- It allow the client to request exactly the data it needs, nothing more or less.
- GraphQL solves problems of over-fetching and under-fetching REST APIs.
- Works on a single endpoint, not multiple like REST.

Why GraphQL?
- REST APIs can lead to over-fetching (too much data) or under-fetching (too little data)
- with GraphQL, you ask only for what you need. No extra data.
- GraphQL is faster, flexible and efficient.

Difference between GraphQL and REST API
- in GraphQL, has only one endpoint
- no versions
- complex fetching

Packages
- npm i @nestjs/apollo @nestjs/graphql apollo-server-express class-transformer class-validator 
graphql