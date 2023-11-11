/* eslint-disable */
import type { Prisma, Employee, Astronaut, Author, Book, Entry } from "../prisma/generated";
export default interface PrismaTypes {
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