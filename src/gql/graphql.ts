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
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any; }
};

export type CreateList = {
  __typename?: 'CreateList';
  list?: Maybe<ListType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateListInputType = {
  address?: InputMaybe<Scalars['Int']['input']>;
  collection?: InputMaybe<Scalars['Int']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  customRoute?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeleteList = {
  __typename?: 'DeleteList';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ListAddressType = {
  __typename?: 'ListAddressType';
  addressLists: Array<ListType>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lineOne: Scalars['String']['output'];
  lineTwo?: Maybe<Scalars['String']['output']>;
  postcode: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ListCollectionType = {
  __typename?: 'ListCollectionType';
  collectionLists: Array<ListType>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ListImageType = {
  __typename?: 'ListImageType';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  list?: Maybe<ListType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ListType = {
  __typename?: 'ListType';
  address?: Maybe<ListAddressType>;
  collection?: Maybe<ListCollectionType>;
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customRoute?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<ListImageType>;
  name: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uuid: Scalars['UUID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createList?: Maybe<CreateList>;
  deleteList?: Maybe<DeleteList>;
  updateList?: Maybe<UpdateList>;
};


export type MutationCreateListArgs = {
  list: CreateListInputType;
};


export type MutationDeleteListArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateListArgs = {
  uuid: Scalars['UUID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getTimeline?: Maybe<Array<Maybe<TimelineItemType>>>;
  list?: Maybe<ListType>;
  lists?: Maybe<Array<Maybe<ListType>>>;
};


export type QueryGetTimelineArgs = {
  keyword: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryListArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryListsArgs = {
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineItemType = {
  __typename?: 'TimelineItemType';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type UpdateList = {
  __typename?: 'UpdateList';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTimelineQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTimelineQuery = { __typename?: 'Query', getTimeline?: Array<{ __typename?: 'TimelineItemType', id: string, description: string, imageUrl: string, url: string } | null> | null };


export const GetTimelineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTimeline"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTimeline"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetTimelineQuery, GetTimelineQueryVariables>;