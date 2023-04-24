import { Mutation, Query } from '../api/types';
import { gql, request as graphqlRequest } from 'graphql-request';
import { useQuery, useMutation } from '@tanstack/react-query';

const endPoint = '/graphql';

export async function queryRequest(query: string, variables = {}): Promise<Query> {
  return await graphqlRequest<Query>(endPoint, query, variables);
}

export async function mutationRequest(mutation: string, variables: {}): Promise<Mutation> {
  return await graphqlRequest<Mutation>(endPoint, mutation, variables);
}

export const plansQuery = gql`
  query plans {
    plans {
      id
      name
      monthlyFee
      yearlyFee
    }
  }
`;

export const addonsQuery = gql`
  query addons {
    addons {
      id
      name
      description
      monthlyFee
      yearlyFee
    }
  }
`;

export const subscribeMutation = gql`
  mutation subscribe(
    $userName: userName
    $userEmail: userEmail
    $userPhone: userPhone
    $planId: planId
    $addonIds: addonIds
  ) {
    subscription(
      userName: $userName
      userEmail: $userEmail
      userPhone: $userPhone
      planId: $planId
      addonIds: $addonIds
    ) {
      id
      status
    }
  }
`;

export const useApi = () => {
  return {
    useQuery,
    useMutation,
  };
};
