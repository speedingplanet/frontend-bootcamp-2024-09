import { GraphQLResolveInfo } from 'graphql';
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
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type Class = {
  __typename?: 'Class';
  course?: Maybe<Course>;
  courseId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  instructor?: Maybe<Instructor>;
  instructorId?: Maybe<Scalars['Int']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['Int']['output']>;
  seats?: Maybe<Scalars['Int']['output']>;
  semester: Scalars['String']['output'];
};

export type Country = {
  __typename?: 'Country';
  area?: Maybe<Scalars['Float']['output']>;
  cca2?: Maybe<Scalars['String']['output']>;
  cca3?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  density?: Maybe<Scalars['Float']['output']>;
  densityMi?: Maybe<Scalars['Float']['output']>;
  growthRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  landAreaKm?: Maybe<Scalars['Float']['output']>;
  netChange?: Maybe<Scalars['Float']['output']>;
  place?: Maybe<Scalars['Int']['output']>;
  pop1980?: Maybe<Scalars['Int']['output']>;
  pop2000?: Maybe<Scalars['Int']['output']>;
  pop2010?: Maybe<Scalars['Int']['output']>;
  pop2022?: Maybe<Scalars['Int']['output']>;
  pop2023?: Maybe<Scalars['Int']['output']>;
  pop2030?: Maybe<Scalars['Int']['output']>;
  pop2050?: Maybe<Scalars['Int']['output']>;
  unMember?: Maybe<Scalars['Boolean']['output']>;
  worldPercentage?: Maybe<Scalars['Float']['output']>;
};

export type Course = {
  __typename?: 'Course';
  courseDescription?: Maybe<Scalars['String']['output']>;
  courseTitle: Scalars['String']['output'];
  credits?: Maybe<Scalars['Int']['output']>;
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
};

export type Department = {
  __typename?: 'Department';
  departmentName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type Instructor = {
  __typename?: 'Instructor';
  city?: Maybe<Scalars['String']['output']>;
  classes?: Maybe<Array<Maybe<Class>>>;
  country?: Maybe<Scalars['String']['output']>;
  dateOfBirth: Scalars['String']['output'];
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  classes?: Maybe<Array<Maybe<Class>>>;
  countries?: Maybe<Array<Maybe<Country>>>;
  courses?: Maybe<Array<Maybe<Course>>>;
  departments?: Maybe<Array<Maybe<Department>>>;
  hello?: Maybe<Scalars['String']['output']>;
  instructors?: Maybe<Array<Maybe<Instructor>>>;
  registrations?: Maybe<Array<Maybe<Registration>>>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  studentById?: Maybe<Student>;
  students?: Maybe<Array<Maybe<Student>>>;
  studentsByCountry?: Maybe<Array<Maybe<Student>>>;
  studentsWithFilter: Array<Maybe<Student>>;
};


export type QueryHelloArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStudentByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStudentsArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStudentsByCountryArgs = {
  country: Scalars['String']['input'];
};


export type QueryStudentsWithFilterArgs = {
  filter: StudentOptional;
};

export type Registration = {
  __typename?: 'Registration';
  class?: Maybe<Class>;
  classId: Scalars['Int']['output'];
  course?: Maybe<Course>;
  id: Scalars['Int']['output'];
  registrationDate?: Maybe<Scalars['String']['output']>;
  registrationStatus?: Maybe<Scalars['String']['output']>;
  student?: Maybe<Student>;
  studentId: Scalars['Int']['output'];
};

export type Room = {
  __typename?: 'Room';
  building?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  roomCapacity?: Maybe<Scalars['Int']['output']>;
};

export type Student = {
  __typename?: 'Student';
  active: Scalars['Boolean']['output'];
  address: Address;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
};

export type StudentInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
};

export type StudentOptional = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
};

export type Studentv1 = {
  __typename?: 'Studentv1';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  dateOfBirth: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
};



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
  Address: ResolverTypeWrapper<Address>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Class: ResolverTypeWrapper<Class>;
  Country: ResolverTypeWrapper<Country>;
  Course: ResolverTypeWrapper<Course>;
  Department: ResolverTypeWrapper<Department>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Instructor: ResolverTypeWrapper<Instructor>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Registration: ResolverTypeWrapper<Registration>;
  Room: ResolverTypeWrapper<Room>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Student: ResolverTypeWrapper<Student>;
  StudentInput: StudentInput;
  StudentOptional: StudentOptional;
  Studentv1: ResolverTypeWrapper<Studentv1>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  Boolean: Scalars['Boolean']['output'];
  Class: Class;
  Country: Country;
  Course: Course;
  Department: Department;
  Float: Scalars['Float']['output'];
  Instructor: Instructor;
  Int: Scalars['Int']['output'];
  Query: {};
  Registration: Registration;
  Room: Room;
  String: Scalars['String']['output'];
  Student: Student;
  StudentInput: StudentInput;
  StudentOptional: StudentOptional;
  Studentv1: Studentv1;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['Class'] = ResolversParentTypes['Class']> = {
  course?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType>;
  courseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  instructor?: Resolver<Maybe<ResolversTypes['Instructor']>, ParentType, ContextType>;
  instructorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  roomId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seats?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  semester?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  area?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cca2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cca3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  density?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  densityMi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  growthRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  landAreaKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netChange?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  place?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pop1980?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pop2000?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pop2010?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pop2022?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pop2023?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pop2030?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pop2050?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  worldPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CourseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']> = {
  courseDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  courseTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  departmentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  departmentName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Instructor'] = ResolversParentTypes['Instructor']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Class']>>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  departmentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Class']>>>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  courses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Course']>>>, ParentType, ContextType>;
  departments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryHelloArgs>>;
  instructors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Instructor']>>>, ParentType, ContextType>;
  registrations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Registration']>>>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
  studentById?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<QueryStudentByIdArgs, 'id'>>;
  students?: Resolver<Maybe<Array<Maybe<ResolversTypes['Student']>>>, ParentType, ContextType, Partial<QueryStudentsArgs>>;
  studentsByCountry?: Resolver<Maybe<Array<Maybe<ResolversTypes['Student']>>>, ParentType, ContextType, RequireFields<QueryStudentsByCountryArgs, 'country'>>;
  studentsWithFilter?: Resolver<Array<Maybe<ResolversTypes['Student']>>, ParentType, ContextType, RequireFields<QueryStudentsWithFilterArgs, 'filter'>>;
};

export type RegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Registration'] = ResolversParentTypes['Registration']> = {
  class?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType>;
  classId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  course?: Resolver<Maybe<ResolversTypes['Course']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registrationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  student?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType>;
  studentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomCapacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Student'] = ResolversParentTypes['Student']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Studentv1Resolvers<ContextType = any, ParentType extends ResolversParentTypes['Studentv1'] = ResolversParentTypes['Studentv1']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Class?: ClassResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Course?: CourseResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  Instructor?: InstructorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Registration?: RegistrationResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  Studentv1?: Studentv1Resolvers<ContextType>;
};

