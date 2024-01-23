/* eslint-disable */
import type { Prisma, User, Todo, Role, Employee, Astronaut, Author, Book, Entry } from "/Users/slajchrt/Documents/Repos/test-app/node_modules/@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "roles" | "todo";
        ListRelations: "roles" | "todo";
        Relations: {
            roles: {
                Shape: Role[];
                Name: "Role";
            };
            todo: {
                Shape: Todo[];
                Name: "Todo";
            };
        };
    };
    Todo: {
        Name: "Todo";
        Shape: Todo;
        Include: Prisma.TodoInclude;
        Select: Prisma.TodoSelect;
        OrderBy: Prisma.TodoOrderByWithRelationInput;
        WhereUnique: Prisma.TodoWhereUniqueInput;
        Where: Prisma.TodoWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    Role: {
        Name: "Role";
        Shape: Role;
        Include: Prisma.RoleInclude;
        Select: Prisma.RoleSelect;
        OrderBy: Prisma.RoleOrderByWithRelationInput;
        WhereUnique: Prisma.RoleWhereUniqueInput;
        Where: Prisma.RoleWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    Employee: {
        Name: "Employee";
        Shape: Employee;
        Include: never;
        Select: Prisma.EmployeeSelect;
        OrderBy: Prisma.EmployeeOrderByWithRelationInput;
        WhereUnique: Prisma.EmployeeWhereUniqueInput;
        Where: Prisma.EmployeeWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Astronaut: {
        Name: "Astronaut";
        Shape: Astronaut;
        Include: never;
        Select: Prisma.AstronautSelect;
        OrderBy: Prisma.AstronautOrderByWithRelationInput;
        WhereUnique: Prisma.AstronautWhereUniqueInput;
        Where: Prisma.AstronautWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Author: {
        Name: "Author";
        Shape: Author;
        Include: Prisma.AuthorInclude;
        Select: Prisma.AuthorSelect;
        OrderBy: Prisma.AuthorOrderByWithRelationInput;
        WhereUnique: Prisma.AuthorWhereUniqueInput;
        Where: Prisma.AuthorWhereInput;
        Create: {};
        Update: {};
        RelationName: "books";
        ListRelations: "books";
        Relations: {
            books: {
                Shape: Book[];
                Name: "Book";
            };
        };
    };
    Book: {
        Name: "Book";
        Shape: Book;
        Include: Prisma.BookInclude;
        Select: Prisma.BookSelect;
        OrderBy: Prisma.BookOrderByWithRelationInput;
        WhereUnique: Prisma.BookWhereUniqueInput;
        Where: Prisma.BookWhereInput;
        Create: {};
        Update: {};
        RelationName: "author" | "files";
        ListRelations: "files";
        Relations: {
            author: {
                Shape: Author;
                Name: "Author";
            };
            files: {
                Shape: Entry[];
                Name: "Entry";
            };
        };
    };
    Entry: {
        Name: "Entry";
        Shape: Entry;
        Include: Prisma.EntryInclude;
        Select: Prisma.EntrySelect;
        OrderBy: Prisma.EntryOrderByWithRelationInput;
        WhereUnique: Prisma.EntryWhereUniqueInput;
        Where: Prisma.EntryWhereInput;
        Create: {};
        Update: {};
        RelationName: "book";
        ListRelations: never;
        Relations: {
            book: {
                Shape: Book;
                Name: "Book";
            };
        };
    };
}