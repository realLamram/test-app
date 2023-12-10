/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment astronaut on Astronaut {\n  id\n  name\n  surName\n  birth\n  skill\n  hair\n  eyes\n}\n\nquery Astronaut($id: ID!) {\n  astronaut(id: $id) {\n    ...astronaut\n  }\n}\n\nquery Astronauts($search: String) {\n  astronauts(search: $search) {\n    ...astronaut\n  }\n}\n\nmutation CreateAstronaut($input: AstronautInput!) {\n  createAstronaut(input: $input) {\n    ...astronaut\n  }\n}\n\nmutation UpdateAstronaut($id: ID!, $input: AstronautInput!) {\n  updateAstronaut(id: $id, input: $input) {\n    ...astronaut\n  }\n}\n\nmutation DestroyAstronaut($id: ID!) {\n  destroyAstronaut(id: $id) {\n    ...astronaut\n  }\n}": types.AstronautFragmentDoc,
    "fragment author on Author {\n  id\n  name\n  surName\n}\n\nquery Author($id: ID!) {\n  author(id: $id) {\n    ...author\n    books {\n      ...book\n    }\n  }\n}\n\nquery Authors($search: String) {\n  authors(search: $search) {\n    ...author\n  }\n}\n\nmutation CreateAuthor($input: AuthorInput!) {\n  createAuthor(input: $input) {\n    ...author\n  }\n}\n\nmutation UpdateAuthor($id: ID!, $input: AuthorInput!) {\n  updateAuthor(id: $id, input: $input) {\n    ...author\n  }\n}": types.AuthorFragmentDoc,
    "fragment entry on Entry {\n  id\n  name\n  size\n  extension\n  path\n  type\n  size\n}\n\nfragment book on Book {\n  id\n  title\n  released\n  author {\n    ...author\n  }\n  files {\n    ...entry\n  }\n}\n\nquery Book($id: ID!) {\n  book(id: $id) {\n    ...book\n  }\n}\n\nquery Books($search: SearchInput) {\n  books(search: $search) {\n    ...book\n  }\n}\n\nmutation CreateBook($input: BookCreateInput!, $file: Upload!) {\n  createBook(input: $input, file: $file) {\n    ...book\n  }\n}\n\nmutation UpdateBook($id: ID!, $input: BookUpdateInput!, $file: Upload) {\n  updateBook(id: $id, input: $input, file: $file) {\n    ...book\n  }\n}\n\nmutation DeleteBook($id: ID!, $path: String) {\n  deleteBook(id: $id, path: $path) {\n    ...book\n  }\n}": types.EntryFragmentDoc,
    "fragment employee on Employee {\n  id\n  name\n  surName\n  birth\n  skill\n}\n\nquery Employee($id: ID!) {\n  employee(id: $id) {\n    ...employee\n  }\n}\n\nquery Employees($search: String) {\n  employees(search: $search) {\n    ...employee\n  }\n}\n\nmutation CreateEmployee($input: EmployeeInput!) {\n  createEmployee(input: $input) {\n    ...employee\n  }\n}\n\nmutation UpdateEmployee($id: ID!, $input: EmployeeInput!) {\n  updateEmployee(id: $id, input: $input) {\n    ...employee\n  }\n}\n\nmutation DestroyEmployee($id: ID!) {\n  destroyEmployee(id: $id) {\n    ...employee\n  }\n}": types.EmployeeFragmentDoc,
    "fragment film on Film {\n  imdbID\n  title\n  year\n}\n\nfragment filmsOutput on FilmsOutput {\n  Search {\n    ...film\n  }\n  error\n  response\n  totalResults\n}\n\nquery Film($id: String!) {\n  film(id: $id) {\n    ...film\n    genre\n    director\n    actors\n    country\n    writer\n    language\n    plot\n    poster\n  }\n}\n\nquery FilmsOutput($searchName: String, $searchYear: Int, $page: Int) {\n  filmsOutput(searchName: $searchName, searchYear: $searchYear, page: $page) {\n    ...filmsOutput\n  }\n}": types.FilmFragmentDoc,
    "fragment info on Info {\n  longitude\n  latitude\n}\n\nfragment thumbnail on Thumbnail {\n  id\n  thumbnailURL\n  info {\n    ...info\n  }\n}\n\nquery Thumbnails {\n  thumbnails {\n    ...thumbnail\n  }\n}": types.InfoFragmentDoc,
    "fragment character on Character {\n  id\n  name\n  birth_year\n  eye_color\n  skin_color\n  gender\n}\n\nfragment peopleOutput on PeopleOutput {\n  count\n  next\n  previous\n  results {\n    ...character\n  }\n}\n\nquery People($searchName: String, $page: Int) {\n  people(searchName: $searchName, page: $page) {\n    ...peopleOutput\n  }\n}\n\nquery Character($id: String!) {\n  character(id: $id) {\n    ...character\n  }\n}": types.CharacterFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment astronaut on Astronaut {\n  id\n  name\n  surName\n  birth\n  skill\n  hair\n  eyes\n}\n\nquery Astronaut($id: ID!) {\n  astronaut(id: $id) {\n    ...astronaut\n  }\n}\n\nquery Astronauts($search: String) {\n  astronauts(search: $search) {\n    ...astronaut\n  }\n}\n\nmutation CreateAstronaut($input: AstronautInput!) {\n  createAstronaut(input: $input) {\n    ...astronaut\n  }\n}\n\nmutation UpdateAstronaut($id: ID!, $input: AstronautInput!) {\n  updateAstronaut(id: $id, input: $input) {\n    ...astronaut\n  }\n}\n\nmutation DestroyAstronaut($id: ID!) {\n  destroyAstronaut(id: $id) {\n    ...astronaut\n  }\n}"): (typeof documents)["fragment astronaut on Astronaut {\n  id\n  name\n  surName\n  birth\n  skill\n  hair\n  eyes\n}\n\nquery Astronaut($id: ID!) {\n  astronaut(id: $id) {\n    ...astronaut\n  }\n}\n\nquery Astronauts($search: String) {\n  astronauts(search: $search) {\n    ...astronaut\n  }\n}\n\nmutation CreateAstronaut($input: AstronautInput!) {\n  createAstronaut(input: $input) {\n    ...astronaut\n  }\n}\n\nmutation UpdateAstronaut($id: ID!, $input: AstronautInput!) {\n  updateAstronaut(id: $id, input: $input) {\n    ...astronaut\n  }\n}\n\nmutation DestroyAstronaut($id: ID!) {\n  destroyAstronaut(id: $id) {\n    ...astronaut\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment author on Author {\n  id\n  name\n  surName\n}\n\nquery Author($id: ID!) {\n  author(id: $id) {\n    ...author\n    books {\n      ...book\n    }\n  }\n}\n\nquery Authors($search: String) {\n  authors(search: $search) {\n    ...author\n  }\n}\n\nmutation CreateAuthor($input: AuthorInput!) {\n  createAuthor(input: $input) {\n    ...author\n  }\n}\n\nmutation UpdateAuthor($id: ID!, $input: AuthorInput!) {\n  updateAuthor(id: $id, input: $input) {\n    ...author\n  }\n}"): (typeof documents)["fragment author on Author {\n  id\n  name\n  surName\n}\n\nquery Author($id: ID!) {\n  author(id: $id) {\n    ...author\n    books {\n      ...book\n    }\n  }\n}\n\nquery Authors($search: String) {\n  authors(search: $search) {\n    ...author\n  }\n}\n\nmutation CreateAuthor($input: AuthorInput!) {\n  createAuthor(input: $input) {\n    ...author\n  }\n}\n\nmutation UpdateAuthor($id: ID!, $input: AuthorInput!) {\n  updateAuthor(id: $id, input: $input) {\n    ...author\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment entry on Entry {\n  id\n  name\n  size\n  extension\n  path\n  type\n  size\n}\n\nfragment book on Book {\n  id\n  title\n  released\n  author {\n    ...author\n  }\n  files {\n    ...entry\n  }\n}\n\nquery Book($id: ID!) {\n  book(id: $id) {\n    ...book\n  }\n}\n\nquery Books($search: SearchInput) {\n  books(search: $search) {\n    ...book\n  }\n}\n\nmutation CreateBook($input: BookCreateInput!, $file: Upload!) {\n  createBook(input: $input, file: $file) {\n    ...book\n  }\n}\n\nmutation UpdateBook($id: ID!, $input: BookUpdateInput!, $file: Upload) {\n  updateBook(id: $id, input: $input, file: $file) {\n    ...book\n  }\n}\n\nmutation DeleteBook($id: ID!, $path: String) {\n  deleteBook(id: $id, path: $path) {\n    ...book\n  }\n}"): (typeof documents)["fragment entry on Entry {\n  id\n  name\n  size\n  extension\n  path\n  type\n  size\n}\n\nfragment book on Book {\n  id\n  title\n  released\n  author {\n    ...author\n  }\n  files {\n    ...entry\n  }\n}\n\nquery Book($id: ID!) {\n  book(id: $id) {\n    ...book\n  }\n}\n\nquery Books($search: SearchInput) {\n  books(search: $search) {\n    ...book\n  }\n}\n\nmutation CreateBook($input: BookCreateInput!, $file: Upload!) {\n  createBook(input: $input, file: $file) {\n    ...book\n  }\n}\n\nmutation UpdateBook($id: ID!, $input: BookUpdateInput!, $file: Upload) {\n  updateBook(id: $id, input: $input, file: $file) {\n    ...book\n  }\n}\n\nmutation DeleteBook($id: ID!, $path: String) {\n  deleteBook(id: $id, path: $path) {\n    ...book\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment employee on Employee {\n  id\n  name\n  surName\n  birth\n  skill\n}\n\nquery Employee($id: ID!) {\n  employee(id: $id) {\n    ...employee\n  }\n}\n\nquery Employees($search: String) {\n  employees(search: $search) {\n    ...employee\n  }\n}\n\nmutation CreateEmployee($input: EmployeeInput!) {\n  createEmployee(input: $input) {\n    ...employee\n  }\n}\n\nmutation UpdateEmployee($id: ID!, $input: EmployeeInput!) {\n  updateEmployee(id: $id, input: $input) {\n    ...employee\n  }\n}\n\nmutation DestroyEmployee($id: ID!) {\n  destroyEmployee(id: $id) {\n    ...employee\n  }\n}"): (typeof documents)["fragment employee on Employee {\n  id\n  name\n  surName\n  birth\n  skill\n}\n\nquery Employee($id: ID!) {\n  employee(id: $id) {\n    ...employee\n  }\n}\n\nquery Employees($search: String) {\n  employees(search: $search) {\n    ...employee\n  }\n}\n\nmutation CreateEmployee($input: EmployeeInput!) {\n  createEmployee(input: $input) {\n    ...employee\n  }\n}\n\nmutation UpdateEmployee($id: ID!, $input: EmployeeInput!) {\n  updateEmployee(id: $id, input: $input) {\n    ...employee\n  }\n}\n\nmutation DestroyEmployee($id: ID!) {\n  destroyEmployee(id: $id) {\n    ...employee\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment film on Film {\n  imdbID\n  title\n  year\n}\n\nfragment filmsOutput on FilmsOutput {\n  Search {\n    ...film\n  }\n  error\n  response\n  totalResults\n}\n\nquery Film($id: String!) {\n  film(id: $id) {\n    ...film\n    genre\n    director\n    actors\n    country\n    writer\n    language\n    plot\n    poster\n  }\n}\n\nquery FilmsOutput($searchName: String, $searchYear: Int, $page: Int) {\n  filmsOutput(searchName: $searchName, searchYear: $searchYear, page: $page) {\n    ...filmsOutput\n  }\n}"): (typeof documents)["fragment film on Film {\n  imdbID\n  title\n  year\n}\n\nfragment filmsOutput on FilmsOutput {\n  Search {\n    ...film\n  }\n  error\n  response\n  totalResults\n}\n\nquery Film($id: String!) {\n  film(id: $id) {\n    ...film\n    genre\n    director\n    actors\n    country\n    writer\n    language\n    plot\n    poster\n  }\n}\n\nquery FilmsOutput($searchName: String, $searchYear: Int, $page: Int) {\n  filmsOutput(searchName: $searchName, searchYear: $searchYear, page: $page) {\n    ...filmsOutput\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment info on Info {\n  longitude\n  latitude\n}\n\nfragment thumbnail on Thumbnail {\n  id\n  thumbnailURL\n  info {\n    ...info\n  }\n}\n\nquery Thumbnails {\n  thumbnails {\n    ...thumbnail\n  }\n}"): (typeof documents)["fragment info on Info {\n  longitude\n  latitude\n}\n\nfragment thumbnail on Thumbnail {\n  id\n  thumbnailURL\n  info {\n    ...info\n  }\n}\n\nquery Thumbnails {\n  thumbnails {\n    ...thumbnail\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment character on Character {\n  id\n  name\n  birth_year\n  eye_color\n  skin_color\n  gender\n}\n\nfragment peopleOutput on PeopleOutput {\n  count\n  next\n  previous\n  results {\n    ...character\n  }\n}\n\nquery People($searchName: String, $page: Int) {\n  people(searchName: $searchName, page: $page) {\n    ...peopleOutput\n  }\n}\n\nquery Character($id: String!) {\n  character(id: $id) {\n    ...character\n  }\n}"): (typeof documents)["fragment character on Character {\n  id\n  name\n  birth_year\n  eye_color\n  skin_color\n  gender\n}\n\nfragment peopleOutput on PeopleOutput {\n  count\n  next\n  previous\n  results {\n    ...character\n  }\n}\n\nquery People($searchName: String, $page: Int) {\n  people(searchName: $searchName, page: $page) {\n    ...peopleOutput\n  }\n}\n\nquery Character($id: String!) {\n  character(id: $id) {\n    ...character\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;