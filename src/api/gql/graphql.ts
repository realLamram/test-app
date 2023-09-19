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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type Employee = {
  __typename?: 'Employee';
  birth: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  skill?: Maybe<Scalars['String']['output']>;
  surName: Scalars['String']['output'];
};

export type EmployeeCreateInput = {
  birth: Scalars['Date']['input'];
  name: Scalars['String']['input'];
  skill?: InputMaybe<Scalars['String']['input']>;
  surName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee: Employee;
};


export type MutationCreateEmployeeArgs = {
  input: EmployeeCreateInput;
};

export type Query = {
  __typename?: 'Query';
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Employee>>;
};


export type QueryEmployeeArgs = {
  id: Scalars['ID']['input'];
};

export type EmployeeFragment = { __typename?: 'Employee', id: string, name: string, surName: string, birth: any, skill?: string | null } & { ' $fragmentName'?: 'EmployeeFragment' };

export type GetEmployeeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetEmployeeQuery = { __typename?: 'Query', employee?: (
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  ) | null };

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', employees?: Array<(
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  )> | null };

export type CreateEmployeeMutationVariables = Exact<{
  input: EmployeeCreateInput;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: (
    { __typename?: 'Employee' }
    & { ' $fragmentRefs'?: { 'EmployeeFragment': EmployeeFragment } }
  ) };

export const EmployeeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<EmployeeFragment, unknown>;
export const GetEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<GetEmployeeQuery, GetEmployeeQueryVariables>;
export const GetEmployeesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const CreateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeeCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"employee"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"employee"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Employee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"skill"}}]}}]} as unknown as DocumentNode<CreateEmployeeMutation, CreateEmployeeMutationVariables>;