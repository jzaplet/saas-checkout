import { Mutation, Query } from '../api/types';
import { gql, request as graphqlRequest } from 'graphql-request';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useApi = () => {
  async function queryRequest(query: string, variables = {}): Promise<Query> {
    return await graphqlRequest<Query>('/graphql', query, variables);
  }

  async function mutationRequest(mutation: string, variables: {}): Promise<Mutation> {
    return await graphqlRequest<Mutation>('/graphql', mutation, variables);
  }

  const plansQuery = gql`
    query plans {
      plans {
        id
        name
        monthlyFee
        yearlyFee
      }
    }
  `;

  const addonsQuery = gql`
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

  const subscribeMutation = gql`
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

  return {
    queryRequest,
    mutationRequest,
    useQuery,
    useMutation,

    plansQuery,
    addonsQuery,
    subscribeMutation,
  };
};
