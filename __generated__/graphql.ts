import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { fetchData } from '../fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**  Authenticate and generate a token for a User with the Password Authentication Strategy.  */
  authenticateUserWithPassword?: Maybe<AuthenticateUserOutput>;
  /**  Create a single Otp item.  */
  createOtp?: Maybe<Otp>;
  /**  Create multiple Otp items.  */
  createOtps?: Maybe<Array<Maybe<Otp>>>;
  /**  Create a single PreLogin item.  */
  createPreLogin?: Maybe<PreLogin>;
  /**  Create multiple PreLogin items.  */
  createPreLogins?: Maybe<Array<Maybe<PreLogin>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create multiple WalletCategory items.  */
  createWalletCategories?: Maybe<Array<Maybe<WalletCategory>>>;
  /**  Create a single WalletCategory item.  */
  createWalletCategory?: Maybe<WalletCategory>;
  /**  Create a single WalletCategoryType item.  */
  createWalletCategoryType?: Maybe<WalletCategoryType>;
  /**  Create multiple WalletCategoryType items.  */
  createWalletCategoryTypes?: Maybe<Array<Maybe<WalletCategoryType>>>;
  /**  Create a single WalletTransaction item.  */
  createWalletTransaction?: Maybe<WalletTransaction>;
  /**  Create multiple WalletTransaction items.  */
  createWalletTransactions?: Maybe<Array<Maybe<WalletTransaction>>>;
  /**  Delete a single Otp item by ID.  */
  deleteOtp?: Maybe<Otp>;
  /**  Delete multiple Otp items by ID.  */
  deleteOtps?: Maybe<Array<Maybe<Otp>>>;
  /**  Delete a single PreLogin item by ID.  */
  deletePreLogin?: Maybe<PreLogin>;
  /**  Delete multiple PreLogin items by ID.  */
  deletePreLogins?: Maybe<Array<Maybe<PreLogin>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete multiple WalletCategory items by ID.  */
  deleteWalletCategories?: Maybe<Array<Maybe<WalletCategory>>>;
  /**  Delete a single WalletCategory item by ID.  */
  deleteWalletCategory?: Maybe<WalletCategory>;
  /**  Delete a single WalletCategoryType item by ID.  */
  deleteWalletCategoryType?: Maybe<WalletCategoryType>;
  /**  Delete multiple WalletCategoryType items by ID.  */
  deleteWalletCategoryTypes?: Maybe<Array<Maybe<WalletCategoryType>>>;
  /**  Delete a single WalletTransaction item by ID.  */
  deleteWalletTransaction?: Maybe<WalletTransaction>;
  /**  Delete multiple WalletTransaction items by ID.  */
  deleteWalletTransactions?: Maybe<Array<Maybe<WalletTransaction>>>;
  unauthenticateUser?: Maybe<UnauthenticateUserOutput>;
  updateAuthenticatedUser?: Maybe<User>;
  /**  Update a single Otp item by ID.  */
  updateOtp?: Maybe<Otp>;
  /**  Update multiple Otp items by ID.  */
  updateOtps?: Maybe<Array<Maybe<Otp>>>;
  /**  Update a single PreLogin item by ID.  */
  updatePreLogin?: Maybe<PreLogin>;
  /**  Update multiple PreLogin items by ID.  */
  updatePreLogins?: Maybe<Array<Maybe<PreLogin>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update multiple WalletCategory items by ID.  */
  updateWalletCategories?: Maybe<Array<Maybe<WalletCategory>>>;
  /**  Update a single WalletCategory item by ID.  */
  updateWalletCategory?: Maybe<WalletCategory>;
  /**  Update a single WalletCategoryType item by ID.  */
  updateWalletCategoryType?: Maybe<WalletCategoryType>;
  /**  Update multiple WalletCategoryType items by ID.  */
  updateWalletCategoryTypes?: Maybe<Array<Maybe<WalletCategoryType>>>;
  /**  Update a single WalletTransaction item by ID.  */
  updateWalletTransaction?: Maybe<WalletTransaction>;
  /**  Update multiple WalletTransaction items by ID.  */
  updateWalletTransactions?: Maybe<Array<Maybe<WalletTransaction>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationCreateOtpArgs = {
  data?: InputMaybe<OtpCreateInput>;
};


export type MutationCreateOtpsArgs = {
  data?: InputMaybe<Array<InputMaybe<OtpsCreateInput>>>;
};


export type MutationCreatePreLoginArgs = {
  data?: InputMaybe<PreLoginCreateInput>;
};


export type MutationCreatePreLoginsArgs = {
  data?: InputMaybe<Array<InputMaybe<PreLoginsCreateInput>>>;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};


export type MutationCreateWalletCategoriesArgs = {
  data?: InputMaybe<Array<InputMaybe<WalletCategoriesCreateInput>>>;
};


export type MutationCreateWalletCategoryArgs = {
  data?: InputMaybe<WalletCategoryCreateInput>;
};


export type MutationCreateWalletCategoryTypeArgs = {
  data?: InputMaybe<WalletCategoryTypeCreateInput>;
};


export type MutationCreateWalletCategoryTypesArgs = {
  data?: InputMaybe<Array<InputMaybe<WalletCategoryTypesCreateInput>>>;
};


export type MutationCreateWalletTransactionArgs = {
  data?: InputMaybe<WalletTransactionCreateInput>;
};


export type MutationCreateWalletTransactionsArgs = {
  data?: InputMaybe<Array<InputMaybe<WalletTransactionsCreateInput>>>;
};


export type MutationDeleteOtpArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOtpsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeletePreLoginArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePreLoginsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteWalletCategoriesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteWalletCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWalletCategoryTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWalletCategoryTypesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteWalletTransactionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWalletTransactionsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationUpdateAuthenticatedUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
};


export type MutationUpdateOtpArgs = {
  data?: InputMaybe<OtpUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateOtpsArgs = {
  data?: InputMaybe<Array<InputMaybe<OtpsUpdateInput>>>;
};


export type MutationUpdatePreLoginArgs = {
  data?: InputMaybe<PreLoginUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdatePreLoginsArgs = {
  data?: InputMaybe<Array<InputMaybe<PreLoginsUpdateInput>>>;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};


export type MutationUpdateWalletCategoriesArgs = {
  data?: InputMaybe<Array<InputMaybe<WalletCategoriesUpdateInput>>>;
};


export type MutationUpdateWalletCategoryArgs = {
  data?: InputMaybe<WalletCategoryUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateWalletCategoryTypeArgs = {
  data?: InputMaybe<WalletCategoryTypeUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateWalletCategoryTypesArgs = {
  data?: InputMaybe<Array<InputMaybe<WalletCategoryTypesUpdateInput>>>;
};


export type MutationUpdateWalletTransactionArgs = {
  data?: InputMaybe<WalletTransactionUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateWalletTransactionsArgs = {
  data?: InputMaybe<Array<InputMaybe<WalletTransactionsUpdateInput>>>;
};

/**  A keystone list  */
export type Otp = {
  __typename?: 'Otp';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Otp List config, or
   *  2. As an alias to the field set on 'labelField' in the Otp List config, or
   *  3. As an alias to a 'name' field on the Otp List (if one exists), or
   *  4. As an alias to the 'id' field on the Otp List.
   */
  _label_?: Maybe<Scalars['String']>;
  _userMeta?: Maybe<_QueryMeta>;
  code?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  type?: Maybe<OtpTypeType>;
  user: Array<User>;
};


/**  A keystone list  */
export type Otp_UserMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


/**  A keystone list  */
export type OtpUserArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type OtpCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<OtpTypeType>;
  user?: InputMaybe<UserRelateToManyInput>;
};

export enum OtpTypeType {
  ResetPasscode = 'reset_passcode',
  ResetPassword = 'reset_password',
  VerifyPhone = 'verify_phone'
}

export type OtpUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<OtpTypeType>;
  user?: InputMaybe<UserRelateToManyInput>;
};

export type OtpWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<OtpWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<OtpWhereInput>>>;
  code?: InputMaybe<Scalars['String']>;
  code_contains?: InputMaybe<Scalars['String']>;
  code_contains_i?: InputMaybe<Scalars['String']>;
  code_ends_with?: InputMaybe<Scalars['String']>;
  code_ends_with_i?: InputMaybe<Scalars['String']>;
  code_i?: InputMaybe<Scalars['String']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code_not?: InputMaybe<Scalars['String']>;
  code_not_contains?: InputMaybe<Scalars['String']>;
  code_not_contains_i?: InputMaybe<Scalars['String']>;
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  code_not_ends_with_i?: InputMaybe<Scalars['String']>;
  code_not_i?: InputMaybe<Scalars['String']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  code_not_starts_with_i?: InputMaybe<Scalars['String']>;
  code_starts_with?: InputMaybe<Scalars['String']>;
  code_starts_with_i?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['DateTime']>;
  expires_gt?: InputMaybe<Scalars['DateTime']>;
  expires_gte?: InputMaybe<Scalars['DateTime']>;
  expires_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  expires_lt?: InputMaybe<Scalars['DateTime']>;
  expires_lte?: InputMaybe<Scalars['DateTime']>;
  expires_not?: InputMaybe<Scalars['DateTime']>;
  expires_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<OtpTypeType>;
  type_in?: InputMaybe<Array<InputMaybe<OtpTypeType>>>;
  type_not?: InputMaybe<OtpTypeType>;
  type_not_in?: InputMaybe<Array<InputMaybe<OtpTypeType>>>;
  /**  condition must be true for all nodes  */
  user_every?: InputMaybe<UserWhereInput>;
  /**  condition must be false for all nodes  */
  user_none?: InputMaybe<UserWhereInput>;
  /**  condition must be true for at least 1 node  */
  user_some?: InputMaybe<UserWhereInput>;
};

export type OtpWhereUniqueInput = {
  id: Scalars['ID'];
};

export type OtpsCreateInput = {
  data?: InputMaybe<OtpCreateInput>;
};

export type OtpsUpdateInput = {
  data?: InputMaybe<OtpUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type PreLogin = {
  __typename?: 'PreLogin';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PreLogin List config, or
   *  2. As an alias to the field set on 'labelField' in the PreLogin List config, or
   *  3. As an alias to a 'name' field on the PreLogin List (if one exists), or
   *  4. As an alias to the 'id' field on the PreLogin List.
   */
  _label_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  otp?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type?: Maybe<PreLoginTypeType>;
};

export type PreLoginCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  otp?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PreLoginTypeType>;
};

export enum PreLoginTypeType {
  ResetPasscode = 'reset_passcode',
  ResetPasscodeOtp = 'reset_passcode_otp',
  ResetPassword = 'reset_password',
  ResetPasswordOtp = 'reset_password_otp',
  VerifyPhone = 'verify_phone',
  VerifyPhoneOtp = 'verify_phone_otp'
}

export type PreLoginUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  otp?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PreLoginTypeType>;
};

export type PreLoginWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PreLoginWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PreLoginWhereInput>>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  otp?: InputMaybe<Scalars['String']>;
  otp_contains?: InputMaybe<Scalars['String']>;
  otp_contains_i?: InputMaybe<Scalars['String']>;
  otp_ends_with?: InputMaybe<Scalars['String']>;
  otp_ends_with_i?: InputMaybe<Scalars['String']>;
  otp_i?: InputMaybe<Scalars['String']>;
  otp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otp_not?: InputMaybe<Scalars['String']>;
  otp_not_contains?: InputMaybe<Scalars['String']>;
  otp_not_contains_i?: InputMaybe<Scalars['String']>;
  otp_not_ends_with?: InputMaybe<Scalars['String']>;
  otp_not_ends_with_i?: InputMaybe<Scalars['String']>;
  otp_not_i?: InputMaybe<Scalars['String']>;
  otp_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otp_not_starts_with?: InputMaybe<Scalars['String']>;
  otp_not_starts_with_i?: InputMaybe<Scalars['String']>;
  otp_starts_with?: InputMaybe<Scalars['String']>;
  otp_starts_with_i?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_contains?: InputMaybe<Scalars['String']>;
  password_contains_i?: InputMaybe<Scalars['String']>;
  password_ends_with?: InputMaybe<Scalars['String']>;
  password_ends_with_i?: InputMaybe<Scalars['String']>;
  password_i?: InputMaybe<Scalars['String']>;
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  password_not?: InputMaybe<Scalars['String']>;
  password_not_contains?: InputMaybe<Scalars['String']>;
  password_not_contains_i?: InputMaybe<Scalars['String']>;
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  password_not_ends_with_i?: InputMaybe<Scalars['String']>;
  password_not_i?: InputMaybe<Scalars['String']>;
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  password_not_starts_with_i?: InputMaybe<Scalars['String']>;
  password_starts_with?: InputMaybe<Scalars['String']>;
  password_starts_with_i?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_contains_i?: InputMaybe<Scalars['String']>;
  phone_ends_with?: InputMaybe<Scalars['String']>;
  phone_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_i?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_contains_i?: InputMaybe<Scalars['String']>;
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  phone_not_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_not_i?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  phone_not_starts_with_i?: InputMaybe<Scalars['String']>;
  phone_starts_with?: InputMaybe<Scalars['String']>;
  phone_starts_with_i?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PreLoginTypeType>;
  type_in?: InputMaybe<Array<InputMaybe<PreLoginTypeType>>>;
  type_not?: InputMaybe<PreLoginTypeType>;
  type_not_in?: InputMaybe<Array<InputMaybe<PreLoginTypeType>>>;
};

export type PreLoginWhereUniqueInput = {
  id: Scalars['ID'];
};

export type PreLoginsCreateInput = {
  data?: InputMaybe<PreLoginCreateInput>;
};

export type PreLoginsUpdateInput = {
  data?: InputMaybe<PreLoginUpdateInput>;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /**  Search for the Otp item with the matching ID.  */
  Otp?: Maybe<Otp>;
  /**  Search for the PreLogin item with the matching ID.  */
  PreLogin?: Maybe<PreLogin>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Search for the WalletCategory item with the matching ID.  */
  WalletCategory?: Maybe<WalletCategory>;
  /**  Search for the WalletCategoryType item with the matching ID.  */
  WalletCategoryType?: Maybe<WalletCategoryType>;
  /**  Search for the WalletTransaction item with the matching ID.  */
  WalletTransaction?: Maybe<WalletTransaction>;
  /**  Retrieve the meta-data for the Otp list.  */
  _OtpsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the PreLogin list.  */
  _PreLoginsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the WalletCategory list.  */
  _WalletCategoriesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the WalletCategoryType list.  */
  _WalletCategoryTypesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the WalletTransaction list.  */
  _WalletTransactionsMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all Otp items which match the where clause.  */
  _allOtpsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all PreLogin items which match the where clause.  */
  _allPreLoginsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all WalletCategory items which match the where clause.  */
  _allWalletCategoriesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all WalletCategoryType items which match the where clause.  */
  _allWalletCategoryTypesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all WalletTransaction items which match the where clause.  */
  _allWalletTransactionsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all Otp items which match the where clause.  */
  allOtps?: Maybe<Array<Maybe<Otp>>>;
  /**  Search for all PreLogin items which match the where clause.  */
  allPreLogins?: Maybe<Array<Maybe<PreLogin>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for all WalletCategory items which match the where clause.  */
  allWalletCategories?: Maybe<Array<Maybe<WalletCategory>>>;
  /**  Search for all WalletCategoryType items which match the where clause.  */
  allWalletCategoryTypes?: Maybe<Array<Maybe<WalletCategoryType>>>;
  /**  Search for all WalletTransaction items which match the where clause.  */
  allWalletTransactions?: Maybe<Array<Maybe<WalletTransaction>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedUser?: Maybe<User>;
};


export type QueryOtpArgs = {
  where: OtpWhereUniqueInput;
};


export type QueryPreLoginArgs = {
  where: PreLoginWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryWalletCategoryArgs = {
  where: WalletCategoryWhereUniqueInput;
};


export type QueryWalletCategoryTypeArgs = {
  where: WalletCategoryTypeWhereUniqueInput;
};


export type QueryWalletTransactionArgs = {
  where: WalletTransactionWhereUniqueInput;
};


export type Query_AllOtpsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortOtpsBy>>;
  where?: InputMaybe<OtpWhereInput>;
};


export type Query_AllPreLoginsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortPreLoginsBy>>;
  where?: InputMaybe<PreLoginWhereInput>;
};


export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


export type Query_AllWalletCategoriesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWalletCategoriesBy>>;
  where?: InputMaybe<WalletCategoryWhereInput>;
};


export type Query_AllWalletCategoryTypesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWalletCategoryTypesBy>>;
  where?: InputMaybe<WalletCategoryTypeWhereInput>;
};


export type Query_AllWalletTransactionsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWalletTransactionsBy>>;
  where?: InputMaybe<WalletTransactionWhereInput>;
};


export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};


export type QueryAllOtpsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortOtpsBy>>;
  where?: InputMaybe<OtpWhereInput>;
};


export type QueryAllPreLoginsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortPreLoginsBy>>;
  where?: InputMaybe<PreLoginWhereInput>;
};


export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAllWalletCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWalletCategoriesBy>>;
  where?: InputMaybe<WalletCategoryWhereInput>;
};


export type QueryAllWalletCategoryTypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWalletCategoryTypesBy>>;
  where?: InputMaybe<WalletCategoryTypeWhereInput>;
};


export type QueryAllWalletTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWalletTransactionsBy>>;
  where?: InputMaybe<WalletTransactionWhereInput>;
};

export enum SortOtpsBy {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  ExpiresAsc = 'expires_ASC',
  ExpiresDesc = 'expires_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export enum SortPreLoginsBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OtpAsc = 'otp_ASC',
  OtpDesc = 'otp_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum SortUsersBy {
  BalanceAsc = 'balance_ASC',
  BalanceDesc = 'balance_DESC',
  CreateAtAsc = 'createAt_ASC',
  CreateAtDesc = 'createAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  HidePriceAsc = 'hidePrice_ASC',
  HidePriceDesc = 'hidePrice_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsDeletedAsc = 'isDeleted_ASC',
  IsDeletedDesc = 'isDeleted_DESC',
  IsPhoneVerifiedAsc = 'isPhoneVerified_ASC',
  IsPhoneVerifiedDesc = 'isPhoneVerified_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PasscodeLoginAsc = 'passcodeLogin_ASC',
  PasscodeLoginDesc = 'passcodeLogin_DESC',
  PendingBalanceAsc = 'pendingBalance_ASC',
  PendingBalanceDesc = 'pendingBalance_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  RefCodeAsc = 'refCode_ASC',
  RefCodeDesc = 'refCode_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC'
}

export enum SortWalletCategoriesBy {
  CreateByAsc = 'createBy_ASC',
  CreateByDesc = 'createBy_DESC',
  IconUrlAsc = 'icon_url_ASC',
  IconUrlDesc = 'icon_url_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsDefaultAsc = 'isDefault_ASC',
  IsDefaultDesc = 'isDefault_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum SortWalletCategoryTypesBy {
  IconUrlAsc = 'icon_url_ASC',
  IconUrlDesc = 'icon_url_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortWalletTransactionsBy {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreateAtAsc = 'createAt_ASC',
  CreateAtDesc = 'createAt_DESC',
  ExcludeFromReportAsc = 'excludeFromReport_ASC',
  ExcludeFromReportDesc = 'excludeFromReport_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC'
}

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the User List config, or
   *  2. As an alias to the field set on 'labelField' in the User List config, or
   *  3. As an alias to a 'name' field on the User List (if one exists), or
   *  4. As an alias to the 'id' field on the User List.
   */
  _label_?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Int']>;
  createAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  hidePrice?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  passcodeLogin?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  pendingBalance?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  refCode?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleType>;
};

export type UserCreateInput = {
  balance?: InputMaybe<Scalars['Int']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  hidePrice?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isPhoneVerified?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  passcodeLogin?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  pendingBalance?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  refCode?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleType>;
};

export type UserRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type UserRelateToOneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<UserWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export enum UserRoleType {
  Admin = 'admin',
  Superadmin = 'superadmin',
  User = 'user'
}

export type UserUpdateInput = {
  balance?: InputMaybe<Scalars['Int']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  hidePrice?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isPhoneVerified?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  passcodeLogin?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  pendingBalance?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  refCode?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleType>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  balance?: InputMaybe<Scalars['Int']>;
  balance_gt?: InputMaybe<Scalars['Int']>;
  balance_gte?: InputMaybe<Scalars['Int']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  balance_lt?: InputMaybe<Scalars['Int']>;
  balance_lte?: InputMaybe<Scalars['Int']>;
  balance_not?: InputMaybe<Scalars['Int']>;
  balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  createAt_gt?: InputMaybe<Scalars['DateTime']>;
  createAt_gte?: InputMaybe<Scalars['DateTime']>;
  createAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createAt_lt?: InputMaybe<Scalars['DateTime']>;
  createAt_lte?: InputMaybe<Scalars['DateTime']>;
  createAt_not?: InputMaybe<Scalars['DateTime']>;
  createAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  hidePrice?: InputMaybe<Scalars['Boolean']>;
  hidePrice_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDeleted_not?: InputMaybe<Scalars['Boolean']>;
  isPhoneVerified?: InputMaybe<Scalars['Boolean']>;
  isPhoneVerified_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  passcodeLogin?: InputMaybe<Scalars['String']>;
  passcodeLogin_contains?: InputMaybe<Scalars['String']>;
  passcodeLogin_contains_i?: InputMaybe<Scalars['String']>;
  passcodeLogin_ends_with?: InputMaybe<Scalars['String']>;
  passcodeLogin_ends_with_i?: InputMaybe<Scalars['String']>;
  passcodeLogin_i?: InputMaybe<Scalars['String']>;
  passcodeLogin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passcodeLogin_not?: InputMaybe<Scalars['String']>;
  passcodeLogin_not_contains?: InputMaybe<Scalars['String']>;
  passcodeLogin_not_contains_i?: InputMaybe<Scalars['String']>;
  passcodeLogin_not_ends_with?: InputMaybe<Scalars['String']>;
  passcodeLogin_not_ends_with_i?: InputMaybe<Scalars['String']>;
  passcodeLogin_not_i?: InputMaybe<Scalars['String']>;
  passcodeLogin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passcodeLogin_not_starts_with?: InputMaybe<Scalars['String']>;
  passcodeLogin_not_starts_with_i?: InputMaybe<Scalars['String']>;
  passcodeLogin_starts_with?: InputMaybe<Scalars['String']>;
  passcodeLogin_starts_with_i?: InputMaybe<Scalars['String']>;
  password_is_set?: InputMaybe<Scalars['Boolean']>;
  pendingBalance?: InputMaybe<Scalars['Int']>;
  pendingBalance_gt?: InputMaybe<Scalars['Int']>;
  pendingBalance_gte?: InputMaybe<Scalars['Int']>;
  pendingBalance_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  pendingBalance_lt?: InputMaybe<Scalars['Int']>;
  pendingBalance_lte?: InputMaybe<Scalars['Int']>;
  pendingBalance_not?: InputMaybe<Scalars['Int']>;
  pendingBalance_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_contains_i?: InputMaybe<Scalars['String']>;
  phone_ends_with?: InputMaybe<Scalars['String']>;
  phone_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_i?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_contains_i?: InputMaybe<Scalars['String']>;
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  phone_not_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_not_i?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  phone_not_starts_with_i?: InputMaybe<Scalars['String']>;
  phone_starts_with?: InputMaybe<Scalars['String']>;
  phone_starts_with_i?: InputMaybe<Scalars['String']>;
  refCode?: InputMaybe<Scalars['String']>;
  refCode_contains?: InputMaybe<Scalars['String']>;
  refCode_contains_i?: InputMaybe<Scalars['String']>;
  refCode_ends_with?: InputMaybe<Scalars['String']>;
  refCode_ends_with_i?: InputMaybe<Scalars['String']>;
  refCode_i?: InputMaybe<Scalars['String']>;
  refCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  refCode_not?: InputMaybe<Scalars['String']>;
  refCode_not_contains?: InputMaybe<Scalars['String']>;
  refCode_not_contains_i?: InputMaybe<Scalars['String']>;
  refCode_not_ends_with?: InputMaybe<Scalars['String']>;
  refCode_not_ends_with_i?: InputMaybe<Scalars['String']>;
  refCode_not_i?: InputMaybe<Scalars['String']>;
  refCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  refCode_not_starts_with?: InputMaybe<Scalars['String']>;
  refCode_not_starts_with_i?: InputMaybe<Scalars['String']>;
  refCode_starts_with?: InputMaybe<Scalars['String']>;
  refCode_starts_with_i?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleType>;
  role_in?: InputMaybe<Array<InputMaybe<UserRoleType>>>;
  role_not?: InputMaybe<UserRoleType>;
  role_not_in?: InputMaybe<Array<InputMaybe<UserRoleType>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};

export type WalletCategoriesCreateInput = {
  data?: InputMaybe<WalletCategoryCreateInput>;
};

export type WalletCategoriesUpdateInput = {
  data?: InputMaybe<WalletCategoryUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type WalletCategory = {
  __typename?: 'WalletCategory';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the WalletCategory List config, or
   *  2. As an alias to the field set on 'labelField' in the WalletCategory List config, or
   *  3. As an alias to a 'name' field on the WalletCategory List (if one exists), or
   *  4. As an alias to the 'id' field on the WalletCategory List.
   */
  _label_?: Maybe<Scalars['String']>;
  createBy?: Maybe<User>;
  icon_url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDefault?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<WalletCategoryType>;
};

export type WalletCategoryCreateInput = {
  createBy?: InputMaybe<UserRelateToOneInput>;
  icon_url?: InputMaybe<Scalars['String']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<WalletCategoryTypeRelateToOneInput>;
};

export type WalletCategoryRelateToOneInput = {
  connect?: InputMaybe<WalletCategoryWhereUniqueInput>;
  create?: InputMaybe<WalletCategoryCreateInput>;
  disconnect?: InputMaybe<WalletCategoryWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type WalletCategoryType = {
  __typename?: 'WalletCategoryType';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the WalletCategoryType List config, or
   *  2. As an alias to the field set on 'labelField' in the WalletCategoryType List config, or
   *  3. As an alias to a 'name' field on the WalletCategoryType List (if one exists), or
   *  4. As an alias to the 'id' field on the WalletCategoryType List.
   */
  _label_?: Maybe<Scalars['String']>;
  icon_url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type WalletCategoryTypeCreateInput = {
  icon_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type WalletCategoryTypeRelateToOneInput = {
  connect?: InputMaybe<WalletCategoryTypeWhereUniqueInput>;
  create?: InputMaybe<WalletCategoryTypeCreateInput>;
  disconnect?: InputMaybe<WalletCategoryTypeWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type WalletCategoryTypeUpdateInput = {
  icon_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type WalletCategoryTypeWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<WalletCategoryTypeWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<WalletCategoryTypeWhereInput>>>;
  icon_url?: InputMaybe<Scalars['String']>;
  icon_url_contains?: InputMaybe<Scalars['String']>;
  icon_url_contains_i?: InputMaybe<Scalars['String']>;
  icon_url_ends_with?: InputMaybe<Scalars['String']>;
  icon_url_ends_with_i?: InputMaybe<Scalars['String']>;
  icon_url_i?: InputMaybe<Scalars['String']>;
  icon_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_url_not?: InputMaybe<Scalars['String']>;
  icon_url_not_contains?: InputMaybe<Scalars['String']>;
  icon_url_not_contains_i?: InputMaybe<Scalars['String']>;
  icon_url_not_ends_with?: InputMaybe<Scalars['String']>;
  icon_url_not_ends_with_i?: InputMaybe<Scalars['String']>;
  icon_url_not_i?: InputMaybe<Scalars['String']>;
  icon_url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_url_not_starts_with?: InputMaybe<Scalars['String']>;
  icon_url_not_starts_with_i?: InputMaybe<Scalars['String']>;
  icon_url_starts_with?: InputMaybe<Scalars['String']>;
  icon_url_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type WalletCategoryTypeWhereUniqueInput = {
  id: Scalars['ID'];
};

export type WalletCategoryTypesCreateInput = {
  data?: InputMaybe<WalletCategoryTypeCreateInput>;
};

export type WalletCategoryTypesUpdateInput = {
  data?: InputMaybe<WalletCategoryTypeUpdateInput>;
  id: Scalars['ID'];
};

export type WalletCategoryUpdateInput = {
  createBy?: InputMaybe<UserRelateToOneInput>;
  icon_url?: InputMaybe<Scalars['String']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<WalletCategoryTypeRelateToOneInput>;
};

export type WalletCategoryWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<WalletCategoryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<WalletCategoryWhereInput>>>;
  createBy?: InputMaybe<UserWhereInput>;
  createBy_is_null?: InputMaybe<Scalars['Boolean']>;
  icon_url?: InputMaybe<Scalars['String']>;
  icon_url_contains?: InputMaybe<Scalars['String']>;
  icon_url_contains_i?: InputMaybe<Scalars['String']>;
  icon_url_ends_with?: InputMaybe<Scalars['String']>;
  icon_url_ends_with_i?: InputMaybe<Scalars['String']>;
  icon_url_i?: InputMaybe<Scalars['String']>;
  icon_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_url_not?: InputMaybe<Scalars['String']>;
  icon_url_not_contains?: InputMaybe<Scalars['String']>;
  icon_url_not_contains_i?: InputMaybe<Scalars['String']>;
  icon_url_not_ends_with?: InputMaybe<Scalars['String']>;
  icon_url_not_ends_with_i?: InputMaybe<Scalars['String']>;
  icon_url_not_i?: InputMaybe<Scalars['String']>;
  icon_url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_url_not_starts_with?: InputMaybe<Scalars['String']>;
  icon_url_not_starts_with_i?: InputMaybe<Scalars['String']>;
  icon_url_starts_with?: InputMaybe<Scalars['String']>;
  icon_url_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isDefault_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<WalletCategoryTypeWhereInput>;
  type_is_null?: InputMaybe<Scalars['Boolean']>;
};

export type WalletCategoryWhereUniqueInput = {
  id: Scalars['ID'];
};

/**  A keystone list  */
export type WalletTransaction = {
  __typename?: 'WalletTransaction';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the WalletTransaction List config, or
   *  2. As an alias to the field set on 'labelField' in the WalletTransaction List config, or
   *  3. As an alias to a 'name' field on the WalletTransaction List (if one exists), or
   *  4. As an alias to the 'id' field on the WalletTransaction List.
   */
  _label_?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  category?: Maybe<WalletCategory>;
  createAt?: Maybe<Scalars['DateTime']>;
  excludeFromReport?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
};

export type WalletTransactionCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<WalletCategoryRelateToOneInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  excludeFromReport?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
};

export type WalletTransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<WalletCategoryRelateToOneInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  excludeFromReport?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
};

export type WalletTransactionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<WalletTransactionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<WalletTransactionWhereInput>>>;
  amount?: InputMaybe<Scalars['Int']>;
  amount_gt?: InputMaybe<Scalars['Int']>;
  amount_gte?: InputMaybe<Scalars['Int']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  amount_lt?: InputMaybe<Scalars['Int']>;
  amount_lte?: InputMaybe<Scalars['Int']>;
  amount_not?: InputMaybe<Scalars['Int']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  category?: InputMaybe<WalletCategoryWhereInput>;
  category_is_null?: InputMaybe<Scalars['Boolean']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  createAt_gt?: InputMaybe<Scalars['DateTime']>;
  createAt_gte?: InputMaybe<Scalars['DateTime']>;
  createAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createAt_lt?: InputMaybe<Scalars['DateTime']>;
  createAt_lte?: InputMaybe<Scalars['DateTime']>;
  createAt_not?: InputMaybe<Scalars['DateTime']>;
  createAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  excludeFromReport?: InputMaybe<Scalars['Boolean']>;
  excludeFromReport_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  note?: InputMaybe<Scalars['String']>;
  note_contains?: InputMaybe<Scalars['String']>;
  note_contains_i?: InputMaybe<Scalars['String']>;
  note_ends_with?: InputMaybe<Scalars['String']>;
  note_ends_with_i?: InputMaybe<Scalars['String']>;
  note_i?: InputMaybe<Scalars['String']>;
  note_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  note_not?: InputMaybe<Scalars['String']>;
  note_not_contains?: InputMaybe<Scalars['String']>;
  note_not_contains_i?: InputMaybe<Scalars['String']>;
  note_not_ends_with?: InputMaybe<Scalars['String']>;
  note_not_ends_with_i?: InputMaybe<Scalars['String']>;
  note_not_i?: InputMaybe<Scalars['String']>;
  note_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  note_not_starts_with?: InputMaybe<Scalars['String']>;
  note_not_starts_with_i?: InputMaybe<Scalars['String']>;
  note_starts_with?: InputMaybe<Scalars['String']>;
  note_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type WalletTransactionWhereUniqueInput = {
  id: Scalars['ID'];
};

export type WalletTransactionsCreateInput = {
  data?: InputMaybe<WalletTransactionCreateInput>;
};

export type WalletTransactionsUpdateInput = {
  data?: InputMaybe<WalletTransactionUpdateInput>;
  id: Scalars['ID'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
};


export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
};

export type AuthenticateUserOutput = {
  __typename?: 'authenticateUserOutput';
  /**  Retrieve information on the newly authenticated User here.  */
  item?: Maybe<User>;
  /**  Used to make subsequent authenticated requests by setting this token in a header: 'Authorization: Bearer <token>'.  */
  token?: Maybe<Scalars['String']>;
};

export type UnauthenticateUserOutput = {
  __typename?: 'unauthenticateUserOutput';
  /**
   * `true` when unauthentication succeeds.
   * NOTE: unauthentication always succeeds when the request has an invalid or missing authentication token.
   */
  success?: Maybe<Scalars['Boolean']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'authenticateUserOutput', token?: string | null, item?: { __typename?: 'User', name?: string | null, id: string } | null } | null };


export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    token
    item {
      name
      id
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetchData<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );