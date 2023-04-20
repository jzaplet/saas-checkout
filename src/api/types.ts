export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export enum Billing {
    month = 'month',
    year = 'year',
}

export type Plan = {
    __typename?: 'Plan';
    id: Scalars['String'];
    name: Scalars['String'];
    monthlyFee: Scalars['Float'];
    yearlyFee: Scalars['Float'];
};

export type Addon = {
    __typename?: 'Addon';
    id: Scalars['String'];
    name: Scalars['String'];
    description: Scalars['String'];
    monthlyFee: Scalars['Float'];
    yearlyFee: Scalars['Float'];
};

export type Subscription = {
    __typename?: 'Subscription';
    status: Scalars['String'];
    id: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    subscribe: Subscription;
};


export type MutationSubscribeArgs = {
    userName: Scalars['String'];
    userEmail: Scalars['String'];
    userPhone: Scalars['String'];
    billing: Billing,
    planId: Scalars['String'];
    addonIds?: InputMaybe<Array<Scalars['String']>>;
};

export type Query = {
    __typename?: 'Query';
    plans: Array<Plan>;
    addons: Array<Addon>;
};
