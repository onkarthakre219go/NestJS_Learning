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
- 