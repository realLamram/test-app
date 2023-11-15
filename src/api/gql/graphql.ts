/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Astronaut = {
  __typename?: 'Astronaut';
  active?: Maybe<Scalars['Boolean']['output']>;
  birth: Scalars['Date']['output'];
  eyes?: Maybe<Scalars['String']['output']>;
  hair?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  skill: Scalars['String']['output'];
  surName: Scalars['String']['output'];
};

export type AstronautInput = {
  birth: Scalars['Date']['input'];
  eyes?: InputMaybe<Scalars['String']['input']>;
  hair?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  skill: Scalars['String']['input'];
  surName: Scalars['String']['input'];
};

export type Author = {
  __typename?: 'Author';
  books: Array<Book>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  surName: Scalars['String']['output'];
};

export type AuthorInput = {
  name: Scalars['String']['input'];
  surName: Scalars['String']['input'];
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  files: Array<Entry>;
  id: Scalars['ID']['output'];
  released: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type BookCreateInput = {
  authorId: Scalars['ID']['input'];
  released: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export enum BookImageType {
  Back = 'back',
  Cover = 'cover'
}

export type BookUpdateInput = {
  released: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Employee = {
  __typename?: 'Employee';
  active?: Maybe<Scalars['Boolean']['output']>;
  birth: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  skill?: Maybe<Scalars['String']['output']>;
  surName: Scalars['String']['output'];
};

export type EmployeeInput = {
  birth: Scalars['Date']['input'];
  name: Scalars['String']['input'];
  skill?: InputMaybe<Scalars['String']['input']>;
  surName: Scalars['String']['input'];
};

export type Entry = {
  __typename?: 'Entry';
  extension: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['BigInt']['output'];
  type: BookImageType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAstronaut: Astronaut;
  createAuthor: Author;
  createBook: Book;
  createEmployee: Employee;
  deleteBook: Book;
  destroyAstronaut: Astronaut;
  destroyEmployee: Employee;
  updateAstronaut: Astronaut;
  updateAuthor: Author;
  updateBook: Book;
  updateEmployee: Employee;
};


export type MutationCreateAstronautArgs = {
  input: AstronautInput;
};


export type MutationCreateAuthorArgs = {
  input: AuthorInput;
};


export type MutationCreateBookArgs = {
  file: Scalars['Upload']['input'];
  input: BookCreateInput;
};


export type MutationCreateEmployeeArgs = {
  input: EmployeeInput;
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDestroyAstronautArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAstronautArgs = {
  id: Scalars['ID']['input'];
  input: AstronautInput;
};


export type MutationUpdateAuthorArgs = {
  id: Scalars['ID']['input'];
  input: AuthorInput;
};


export type MutationUpdateBookArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  input: BookUpdateInput;
};


export type MutationUpdateEmployeeArgs = {
  id: Scalars['ID']['input'];
  input: EmployeeInput;
};

export type Query = {
  __typename?: 'Query';
  astronaut?: Maybe<Astronaut>;
  astronauts?: Maybe<Array<Astronaut>>;
  author: Author;
  authors?: Maybe<Array<Author>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Book>>;
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Employee>>;
};


export type QueryAstronautArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAstronautsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAuthorsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBooksArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmployeesArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type AstronautFragment = { __typename?: 'Astronaut', id: string, name: string, surName: string, birth: any, skill: string, hair?: string | null, eyes?: string | null } & { ' $fragmentName'?: 'AstronautFragment' };

export type AstronautQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AstronautQuery = { __typename?: 'Query', astronaut?: (
    { __typename?: 'Astronaut' }
    & { ' $fragmentRefs'?: { 'AstronautFragment': AstronautFragment } }
  ) | null };

export type AstronautsQueryVariables = Exact<{ [key: string]: never; }>;


export type AstronautsQuery = { __typename?: 'Query', astronauts?: Array<(
    { __typename?: 'Astronaut' }
    & { ' $fragmentRefs'?: { 'AstronautFragment': AstronautFragment } }
  )> | null };

export type CreateAstronautMutationVariables = Exact<{
  input: AstronautInput;
}>;


export type CreateAstronautMutation = { __typename?: 'Mutation', createAstronaut: (
    { __typename?: 'Astronaut' }
    & { ' $fragmentRefs'?: { 'AstronautFragment': AstronautFragment } }
  ) };

export type UpdateAstronautMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: AstronautInput;
}>;


export type UpdateAstronautMutation = { __typename?: 'Mutation', updateAstronaut: (
    { __typename?: 'Astronaut' }
    & { ' $fragmentRefs'?: { 'AstronautFragment': AstronautFragment } }
  ) };

export type DestroyAstronautMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DestroyAstronautMutation = { __typename?: 'Mutation', destroyAstronaut: (
    { __typename?: 'Astronaut' }
    & { ' $fragmentRefs'?: { 'AstronautFragment': AstronautFragment } }
  ) };

export type AuthorFragment = { __typename?: 'Author', id: string, name: string, surName: string } & { ' $fragmentName'?: 'AuthorFragment' };

export type AuthorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AuthorQuery = { __typename?: 'Query', author: (
    { __typename?: 'Author', books: Array<(
      { __typename?: 'Book' }
      & { ' $fragmentRefs'?: { 'BookFragment': BookFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'AuthorFragment': AuthorFragment } }
  ) };

export type AuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorsQuery = { __typename?: 'Query', authors?: Array<(
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'AuthorFragment': AuthorFragment } }
  )> | null };

export type CreateAuthorMutationVariables = Exact<{
  input: AuthorInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor: (
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'AuthorFragment': AuthorFragment } }
  ) };

export type UpdateAuthorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: AuthorInput;
}>;


export type UpdateAuthorMutation = { __typename?: 'Mutation', updateAuthor: (
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'AuthorFragment': AuthorFragment } }
  ) };

export type EntryFragment = { __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType } & { ' $fragmentName'?: 'EntryFragment' };

export type BookFragment = { __typename?: 'Book', id: string, title: string, released: number, author: (
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'AuthorFragment': AuthorFragment } }
  ), files: Array<(
    { __typename?: 'Entry' }
    & { ' $fragmentRefs'?: { 'EntryFragment': EntryFragment } }
  )> } & { ' $fragmentName'?: 'BookFragment' };

export type BookQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BookQuery = { __typename?: 'Query', book?: (
    { __typename?: 'Book' }
    & { ' $fragmentRefs'?: { 'BookFragment': BookFragment } }
  ) | null };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', books?: Array<(
    { __typename?: 'Book' }
    & { ' $fragmentRefs'?: { 'BookFragment': BookFragment } }
  )> | null };

export type CreateBookMutationVariables = Exact<{
  input: BookCreateInput;
  file: Scalars['Upload']['input'];
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: (
    { __typename?: 'Book' }
    & { ' $fragmentRefs'?: { 'BookFragment': BookFragment } }
  ) };

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: BookUpdateInput;
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateBookMutation = { __typename?: 'Mutation', updateBook: (
    { __typename?: 'Book' }
    & { ' $fragmentRefs'?: { 'BookFragment': BookFragment } }
  ) };

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeleteBookMutation = { __typename?: 'Mutation', deleteBook: (
    { __typename?: 'Book' }
    & { ' $fragmentRefs'?: { 'BookFragment': BookFragment } }
  ) };

export type EmployeeFragment = { __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null } & { ' $fragmentName'?: 'EmployeeFragment' };

export type EmployeeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EmployeeQuery = { __typename?: 'Query', employee?: (
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  ) | null };

export type EmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployeesQuery = { __typename?: 'Query', employees?: Array<(
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  )> | null };

export type CreateEmployeeMutationVariables = Exact<{
  input: EmployeeInput;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: (
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  ) };

export type UpdateEmployeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: EmployeeInput;
}>;


export type UpdateEmployeeMutation = { __typename?: 'Mutation', updateEmployee: (
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  ) };

export type DestroyEmployeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DestroyEmployeeMutation = { __typename?: 'Mutation', destroyEmployee: (
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  ) };

export const AstronautFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"astronaut"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Astronaut"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}},{"kind":"Field","name":{"kind":"Name","value":"hair"}},{"kind":"Field","name":{"kind":"Name","value":"eyes"}}]}}]} as unknown as DocumentNode<AstronautFragment, unknown>;
export const AuthorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}}]} as unknown as DocumentNode<AuthorFragment, unknown>;
export const EntryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]} as unknown as DocumentNode<EntryFragment, unknown>;
export const BookFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"entry"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]} as unknown as DocumentNode<BookFragment, unknown>;
export const EmployeeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<EmployeeFragment, unknown>;
export const AstronautDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Astronaut"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"astronaut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"astronaut"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"astronaut"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Astronaut"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}},{"kind":"Field","name":{"kind":"Name","value":"hair"}},{"kind":"Field","name":{"kind":"Name","value":"eyes"}}]}}]} as unknown as DocumentNode<AstronautQuery, AstronautQueryVariables>;
export const AstronautsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Astronauts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"astronauts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"astronaut"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"astronaut"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Astronaut"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}},{"kind":"Field","name":{"kind":"Name","value":"hair"}},{"kind":"Field","name":{"kind":"Name","value":"eyes"}}]}}]} as unknown as DocumentNode<AstronautsQuery, AstronautsQueryVariables>;
export const CreateAstronautDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAstronaut"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AstronautInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAstronaut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"astronaut"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"astronaut"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Astronaut"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}},{"kind":"Field","name":{"kind":"Name","value":"hair"}},{"kind":"Field","name":{"kind":"Name","value":"eyes"}}]}}]} as unknown as DocumentNode<CreateAstronautMutation, CreateAstronautMutationVariables>;
export const UpdateAstronautDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAstronaut"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AstronautInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAstronaut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"astronaut"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"astronaut"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Astronaut"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}},{"kind":"Field","name":{"kind":"Name","value":"hair"}},{"kind":"Field","name":{"kind":"Name","value":"eyes"}}]}}]} as unknown as DocumentNode<UpdateAstronautMutation, UpdateAstronautMutationVariables>;
export const DestroyAstronautDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DestroyAstronaut"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destroyAstronaut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"astronaut"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"astronaut"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Astronaut"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}},{"kind":"Field","name":{"kind":"Name","value":"hair"}},{"kind":"Field","name":{"kind":"Name","value":"eyes"}}]}}]} as unknown as DocumentNode<DestroyAstronautMutation, DestroyAstronautMutationVariables>;
export const AuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Author"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"book"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"entry"}}]}}]}}]} as unknown as DocumentNode<AuthorQuery, AuthorQueryVariables>;
export const AuthorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}}]} as unknown as DocumentNode<AuthorsQuery, AuthorsQueryVariables>;
export const CreateAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}}]} as unknown as DocumentNode<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const UpdateAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}}]} as unknown as DocumentNode<UpdateAuthorMutation, UpdateAuthorMutationVariables>;
export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"book"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"entry"}}]}}]}}]} as unknown as DocumentNode<BookQuery, BookQueryVariables>;
export const BooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"book"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"entry"}}]}}]}}]} as unknown as DocumentNode<BooksQuery, BooksQueryVariables>;
export const CreateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"book"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"entry"}}]}}]}}]} as unknown as DocumentNode<CreateBookMutation, CreateBookMutationVariables>;
export const UpdateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"book"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"entry"}}]}}]}}]} as unknown as DocumentNode<UpdateBookMutation, UpdateBookMutationVariables>;
export const DeleteBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"book"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"entry"}}]}}]}}]} as unknown as DocumentNode<DeleteBookMutation, DeleteBookMutationVariables>;
export const EmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Employee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<EmployeeQuery, EmployeeQueryVariables>;
export const EmployeesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<EmployeesQuery, EmployeesQueryVariables>;
export const CreateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const UpdateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;
export const DestroyEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DestroyEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destroyEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<DestroyEmployeeMutation, DestroyEmployeeMutationVariables>;