import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export interface Astronaut {
  __typename?: 'Astronaut';
  active?: Maybe<Scalars['Boolean']['output']>;
  birth: Scalars['Date']['output'];
  eyes?: Maybe<Scalars['String']['output']>;
  hair?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  skill: Scalars['String']['output'];
  surName: Scalars['String']['output'];
}

export interface AstronautInput {
  birth: Scalars['Date']['input'];
  eyes?: InputMaybe<Scalars['String']['input']>;
  hair?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  skill: Scalars['String']['input'];
  surName: Scalars['String']['input'];
}

export interface Author {
  __typename?: 'Author';
  books: Array<Book>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  surName: Scalars['String']['output'];
}

export interface AuthorInput {
  name: Scalars['String']['input'];
  surName: Scalars['String']['input'];
}

export interface Book {
  __typename?: 'Book';
  author: Author;
  files: Array<Entry>;
  id: Scalars['ID']['output'];
  released: Scalars['Int']['output'];
  title: Scalars['String']['output'];
}

export interface BookCreateInput {
  authorId: Scalars['ID']['input'];
  released: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}

export type BookImageType =
  | 'back'
  | 'cover';

export interface BookUpdateInput {
  released: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}

/** Character info. */
export interface Character {
  __typename?: 'Character';
  birth_year?: Maybe<Scalars['String']['output']>;
  eye_color?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  skin_color?: Maybe<Scalars['String']['output']>;
}

export interface Employee {
  __typename?: 'Employee';
  active?: Maybe<Scalars['Boolean']['output']>;
  birth: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  skill?: Maybe<Scalars['String']['output']>;
  surName: Scalars['String']['output'];
}

export interface EmployeeInput {
  birth: Scalars['Date']['input'];
  name: Scalars['String']['input'];
  skill?: InputMaybe<Scalars['String']['input']>;
  surName: Scalars['String']['input'];
}

export interface Entry {
  __typename?: 'Entry';
  extension: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['BigInt']['output'];
  type: BookImageType;
}

/** Film info. */
export interface Film {
  __typename?: 'Film';
  actors?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  imdbID?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  plot?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  writer?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
}

/** Complete films info. */
export interface FilmsOutput {
  __typename?: 'FilmsOutput';
  Search: Array<Film>;
  error?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
}

/** Thumbnail info. */
export interface Info {
  __typename?: 'Info';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createAstronaut: Astronaut;
  createAuthor: Author;
  createBook: Book;
  createEmployee: Employee;
  createTodo: Todo;
  deleteBook: Book;
  deleteTodo: Todo;
  destroyAstronaut: Astronaut;
  destroyEmployee: Employee;
  updateAstronaut: Astronaut;
  updateAuthor: Author;
  updateBook: Book;
  updateEmployee: Employee;
  updateTodo: Todo;
  userRoleUpdate: User;
}


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


export type MutationCreateTodoArgs = {
  input: TodoCreateInput;
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
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


export type MutationUpdateTodoArgs = {
  id: Scalars['ID']['input'];
  input: TodoUpdateInput;
};


export type MutationUserRoleUpdateArgs = {
  input: UserRoleInput;
};

/** People info. */
export interface PeopleOutput {
  __typename?: 'PeopleOutput';
  count?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Character>>;
}

export interface Query {
  __typename?: 'Query';
  astronaut?: Maybe<Astronaut>;
  astronauts?: Maybe<Array<Astronaut>>;
  author: Author;
  authors?: Maybe<Array<Author>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Book>>;
  character?: Maybe<Character>;
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Employee>>;
  film: Film;
  filmsOutput: FilmsOutput;
  people: PeopleOutput;
  thumbnails: Array<Thumbnail>;
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Todo>>;
  users?: Maybe<Array<User>>;
}


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
  search?: InputMaybe<SearchInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCharacterArgs = {
  id: Scalars['String']['input'];
};


export type QueryEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmployeesArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFilmArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFilmsOutputArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  searchYear?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPeopleArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTodosArgs = {
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryUsersArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export interface Role {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  type: RoleType;
  user: User;
}

export type RoleType =
  | 'ADMIN'
  | 'USER';

export interface SearchInput {
  author?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

/** Info. */
export interface Thumbnail {
  __typename?: 'Thumbnail';
  id: Scalars['ID']['output'];
  info?: Maybe<Info>;
  thumbnailURL: Scalars['String']['output'];
}

export interface Todo {
  __typename?: 'Todo';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
}

export interface TodoCreateInput {
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
}

export interface TodoUpdateInput {
  title: Scalars['String']['input'];
}

export interface TodoWhereInput {
  userId?: InputMaybe<Scalars['ID']['input']>;
}

export interface User {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  loginType: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  roles: Array<RoleType>;
  surName?: Maybe<Scalars['String']['output']>;
}

export interface UserRoleInput {
  id: Scalars['ID']['input'];
  role: RoleType;
}

export type AstronautFragment = { __typename?: 'Astronaut', id: string, name: string, surName: string, birth: any, skill: string, hair?: string | null, eyes?: string | null };

export type AstronautQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AstronautQuery = { __typename?: 'Query', astronaut?: { __typename?: 'Astronaut', id: string, name: string, surName: string, birth: any, skill: string, hair?: string | null, eyes?: string | null } | null };

export type AstronautsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type AstronautsQuery = { __typename?: 'Query', astronauts?: Array<{ __typename?: 'Astronaut', id: string, name: string, surName: string, birth: any, skill: string, hair?: string | null, eyes?: string | null }> | null };

export type CreateAstronautMutationVariables = Exact<{
  input: AstronautInput;
}>;


export type CreateAstronautMutation = { __typename?: 'Mutation', createAstronaut: { __typename?: 'Astronaut', id: string, name: string, surName: string, birth: any, skill: string, hair?: string | null, eyes?: string | null } };

export type UpdateAstronautMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: AstronautInput;
}>;


export type UpdateAstronautMutation = { __typename?: 'Mutation', updateAstronaut: { __typename?: 'Astronaut', id: string, name: string, surName: string, birth: any, skill: string, hair?: string | null, eyes?: string | null } };

export type DestroyAstronautMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DestroyAstronautMutation = { __typename?: 'Mutation', destroyAstronaut: { __typename?: 'Astronaut', id: string, name: string, surName: string, birth: any, skill: string, hair?: string | null, eyes?: string | null } };

export type AuthorFragment = { __typename?: 'Author', id: string, name: string, surName: string };

export type AuthorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', id: string, name: string, surName: string, books: Array<{ __typename?: 'Book', id: string, title: string, released: number, author: { __typename?: 'Author', id: string, name: string, surName: string }, files: Array<{ __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType }> }> } };

export type AuthorsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type AuthorsQuery = { __typename?: 'Query', authors?: Array<{ __typename?: 'Author', id: string, name: string, surName: string }> | null };

export type CreateAuthorMutationVariables = Exact<{
  input: AuthorInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor: { __typename?: 'Author', id: string, name: string, surName: string } };

export type UpdateAuthorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: AuthorInput;
}>;


export type UpdateAuthorMutation = { __typename?: 'Mutation', updateAuthor: { __typename?: 'Author', id: string, name: string, surName: string } };

export type EntryFragment = { __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType };

export type BookFragment = { __typename?: 'Book', id: string, title: string, released: number, author: { __typename?: 'Author', id: string, name: string, surName: string }, files: Array<{ __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType }> };

export type BookQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, title: string, released: number, author: { __typename?: 'Author', id: string, name: string, surName: string }, files: Array<{ __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType }> } | null };

export type BooksQueryVariables = Exact<{
  search?: InputMaybe<SearchInput>;
}>;


export type BooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', id: string, title: string, released: number, author: { __typename?: 'Author', id: string, name: string, surName: string }, files: Array<{ __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType }> }> | null };

export type CreateBookMutationVariables = Exact<{
  input: BookCreateInput;
  file: Scalars['Upload']['input'];
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: string, title: string, released: number, author: { __typename?: 'Author', id: string, name: string, surName: string }, files: Array<{ __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType }> } };

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: BookUpdateInput;
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateBookMutation = { __typename?: 'Mutation', updateBook: { __typename?: 'Book', id: string, title: string, released: number, author: { __typename?: 'Author', id: string, name: string, surName: string }, files: Array<{ __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType }> } };

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeleteBookMutation = { __typename?: 'Mutation', deleteBook: { __typename?: 'Book', id: string, title: string, released: number, author: { __typename?: 'Author', id: string, name: string, surName: string }, files: Array<{ __typename?: 'Entry', id: string, name: string, size: any, extension: string, path: string, type: BookImageType }> } };

export type EmployeeFragment = { __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null };

export type EmployeeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EmployeeQuery = { __typename?: 'Query', employee?: { __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null } | null };

export type EmployeesQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type EmployeesQuery = { __typename?: 'Query', employees?: Array<{ __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null }> | null };

export type CreateEmployeeMutationVariables = Exact<{
  input: EmployeeInput;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: { __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null } };

export type UpdateEmployeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: EmployeeInput;
}>;


export type UpdateEmployeeMutation = { __typename?: 'Mutation', updateEmployee: { __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null } };

export type DestroyEmployeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DestroyEmployeeMutation = { __typename?: 'Mutation', destroyEmployee: { __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null } };

export type FilmFragment = { __typename?: 'Film', imdbID?: string | null, title?: string | null, year?: string | null };

export type FilmsOutputFragment = { __typename?: 'FilmsOutput', error?: string | null, response?: string | null, totalResults?: number | null, Search: Array<{ __typename?: 'Film', imdbID?: string | null, title?: string | null, year?: string | null }> };

export type FilmQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FilmQuery = { __typename?: 'Query', film: { __typename?: 'Film', genre?: string | null, director?: string | null, actors?: string | null, country?: string | null, writer?: string | null, language?: string | null, plot?: string | null, poster?: string | null, imdbID?: string | null, title?: string | null, year?: string | null } };

export type FilmsOutputQueryVariables = Exact<{
  searchName?: InputMaybe<Scalars['String']['input']>;
  searchYear?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FilmsOutputQuery = { __typename?: 'Query', filmsOutput: { __typename?: 'FilmsOutput', error?: string | null, response?: string | null, totalResults?: number | null, Search: Array<{ __typename?: 'Film', imdbID?: string | null, title?: string | null, year?: string | null }> } };

export type InfoFragment = { __typename?: 'Info', longitude?: number | null, latitude?: number | null };

export type ThumbnailFragment = { __typename?: 'Thumbnail', id: string, thumbnailURL: string, info?: { __typename?: 'Info', longitude?: number | null, latitude?: number | null } | null };

export type ThumbnailsQueryVariables = Exact<{ [key: string]: never; }>;


export type ThumbnailsQuery = { __typename?: 'Query', thumbnails: Array<{ __typename?: 'Thumbnail', id: string, thumbnailURL: string, info?: { __typename?: 'Info', longitude?: number | null, latitude?: number | null } | null }> };

export type RoleFragment = { __typename?: 'Role', type: RoleType };

export type CharacterFragment = { __typename?: 'Character', id?: string | null, name?: string | null, birth_year?: string | null, eye_color?: string | null, skin_color?: string | null, gender?: string | null };

export type PeopleOutputFragment = { __typename?: 'PeopleOutput', count?: number | null, next?: string | null, previous?: string | null, results?: Array<{ __typename?: 'Character', id?: string | null, name?: string | null, birth_year?: string | null, eye_color?: string | null, skin_color?: string | null, gender?: string | null }> | null };

export type PeopleQueryVariables = Exact<{
  searchName?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PeopleQuery = { __typename?: 'Query', people: { __typename?: 'PeopleOutput', count?: number | null, next?: string | null, previous?: string | null, results?: Array<{ __typename?: 'Character', id?: string | null, name?: string | null, birth_year?: string | null, eye_color?: string | null, skin_color?: string | null, gender?: string | null }> | null } };

export type CharacterQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, name?: string | null, birth_year?: string | null, eye_color?: string | null, skin_color?: string | null, gender?: string | null } | null };

export type TodoFragment = { __typename?: 'Todo', id: string, title: string };

export type TodoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TodoQuery = { __typename?: 'Query', todo?: { __typename?: 'Todo', id: string, title: string } | null };

export type TodosQueryVariables = Exact<{
  where?: InputMaybe<TodoWhereInput>;
}>;


export type TodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id: string, title: string }> | null };

export type CreateTodoMutationVariables = Exact<{
  input: TodoCreateInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string } };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: TodoUpdateInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, title: string } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'Todo', id: string, title: string } };

export type UserFragment = { __typename?: 'User', id: string, name?: string | null, surName?: string | null, fullName?: string | null, email: string };

export type UsersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', roles: Array<RoleType>, id: string, name?: string | null, surName?: string | null, fullName?: string | null, email: string }> | null };

export type UserRoleUpdateMutationVariables = Exact<{
  input: UserRoleInput;
}>;


export type UserRoleUpdateMutation = { __typename?: 'Mutation', userRoleUpdate: { __typename?: 'User', roles: Array<RoleType>, id: string, name?: string | null, surName?: string | null, fullName?: string | null, email: string } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Astronaut: ResolverTypeWrapper<Astronaut>;
  AstronautInput: AstronautInput;
  Author: ResolverTypeWrapper<Author>;
  AuthorInput: AuthorInput;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Book: ResolverTypeWrapper<Book>;
  BookCreateInput: BookCreateInput;
  BookImageType: BookImageType;
  BookUpdateInput: BookUpdateInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Character: ResolverTypeWrapper<Character>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Employee: ResolverTypeWrapper<Employee>;
  EmployeeInput: EmployeeInput;
  Entry: ResolverTypeWrapper<Entry>;
  Film: ResolverTypeWrapper<Film>;
  FilmsOutput: ResolverTypeWrapper<FilmsOutput>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Info: ResolverTypeWrapper<Info>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PeopleOutput: ResolverTypeWrapper<PeopleOutput>;
  Query: ResolverTypeWrapper<{}>;
  Role: ResolverTypeWrapper<Role>;
  RoleType: RoleType;
  SearchInput: SearchInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Thumbnail: ResolverTypeWrapper<Thumbnail>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoCreateInput: TodoCreateInput;
  TodoUpdateInput: TodoUpdateInput;
  TodoWhereInput: TodoWhereInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UserRoleInput: UserRoleInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Astronaut: Astronaut;
  AstronautInput: AstronautInput;
  Author: Author;
  AuthorInput: AuthorInput;
  BigInt: Scalars['BigInt']['output'];
  Book: Book;
  BookCreateInput: BookCreateInput;
  BookUpdateInput: BookUpdateInput;
  Boolean: Scalars['Boolean']['output'];
  Character: Character;
  Date: Scalars['Date']['output'];
  Employee: Employee;
  EmployeeInput: EmployeeInput;
  Entry: Entry;
  Film: Film;
  FilmsOutput: FilmsOutput;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Info: Info;
  Int: Scalars['Int']['output'];
  Mutation: {};
  PeopleOutput: PeopleOutput;
  Query: {};
  Role: Role;
  SearchInput: SearchInput;
  String: Scalars['String']['output'];
  Thumbnail: Thumbnail;
  Todo: Todo;
  TodoCreateInput: TodoCreateInput;
  TodoUpdateInput: TodoUpdateInput;
  TodoWhereInput: TodoWhereInput;
  Upload: Scalars['Upload']['output'];
  User: User;
  UserRoleInput: UserRoleInput;
};

export type AstronautResolvers<ContextType = any, ParentType extends ResolversParentTypes['Astronaut'] = ResolversParentTypes['Astronaut']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  birth?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  eyes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hair?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skill?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  files?: Resolver<Array<ResolversTypes['Entry']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  released?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  birth_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eye_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skin_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  birth?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skill?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['BookImageType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  actors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imdbID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poster?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  writer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilmsOutput'] = ResolversParentTypes['FilmsOutput']> = {
  Search?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalResults?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = {
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAstronaut?: Resolver<ResolversTypes['Astronaut'], ParentType, ContextType, RequireFields<MutationCreateAstronautArgs, 'input'>>;
  createAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationCreateAuthorArgs, 'input'>>;
  createBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationCreateBookArgs, 'file' | 'input'>>;
  createEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, 'input'>>;
  createTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'input'>>;
  deleteBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationDeleteBookArgs, 'id'>>;
  deleteTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  destroyAstronaut?: Resolver<ResolversTypes['Astronaut'], ParentType, ContextType, RequireFields<MutationDestroyAstronautArgs, 'id'>>;
  destroyEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<MutationDestroyEmployeeArgs, 'id'>>;
  updateAstronaut?: Resolver<ResolversTypes['Astronaut'], ParentType, ContextType, RequireFields<MutationUpdateAstronautArgs, 'id' | 'input'>>;
  updateAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationUpdateAuthorArgs, 'id' | 'input'>>;
  updateBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationUpdateBookArgs, 'id' | 'input'>>;
  updateEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<MutationUpdateEmployeeArgs, 'id' | 'input'>>;
  updateTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'id' | 'input'>>;
  userRoleUpdate?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUserRoleUpdateArgs, 'input'>>;
};

export type PeopleOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleOutput'] = ResolversParentTypes['PeopleOutput']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<ResolversTypes['Character']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  astronaut?: Resolver<Maybe<ResolversTypes['Astronaut']>, ParentType, ContextType, RequireFields<QueryAstronautArgs, 'id'>>;
  astronauts?: Resolver<Maybe<Array<ResolversTypes['Astronaut']>>, ParentType, ContextType, Partial<QueryAstronautsArgs>>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<QueryAuthorArgs, 'id'>>;
  authors?: Resolver<Maybe<Array<ResolversTypes['Author']>>, ParentType, ContextType, Partial<QueryAuthorsArgs>>;
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<Maybe<Array<ResolversTypes['Book']>>, ParentType, ContextType, Partial<QueryBooksArgs>>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, 'id'>>;
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeeArgs, 'id'>>;
  employees?: Resolver<Maybe<Array<ResolversTypes['Employee']>>, ParentType, ContextType, Partial<QueryEmployeesArgs>>;
  film?: Resolver<ResolversTypes['Film'], ParentType, ContextType, Partial<QueryFilmArgs>>;
  filmsOutput?: Resolver<ResolversTypes['FilmsOutput'], ParentType, ContextType, Partial<QueryFilmsOutputArgs>>;
  people?: Resolver<ResolversTypes['PeopleOutput'], ParentType, ContextType, Partial<QueryPeopleArgs>>;
  thumbnails?: Resolver<Array<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryTodoArgs, 'id'>>;
  todos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, Partial<QueryTodosArgs>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RoleType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThumbnailResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thumbnail'] = ResolversParentTypes['Thumbnail']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  thumbnailURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  loginType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['RoleType']>, ParentType, ContextType>;
  surName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Astronaut?: AstronautResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Book?: BookResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Employee?: EmployeeResolvers<ContextType>;
  Entry?: EntryResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  FilmsOutput?: FilmsOutputResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PeopleOutput?: PeopleOutputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  Thumbnail?: ThumbnailResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

