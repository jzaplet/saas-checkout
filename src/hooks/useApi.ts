/**
 * Copyright (c) 2023 Strategio Digital s.r.o.
 * @author Jiří Zapletal (https://strategio.dev, jz@strategio.dev)
 */
import { Query } from '../api/types';
import { gql, request as graphqlRequest } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

export const useApi = () => {
  async function request(query: string): Promise<Query> {
    return await graphqlRequest<Query>('/graphql', query);
  }

  const plansQueryDocument = gql`
    query plans {
      plans {
        id
        name
        monthlyFee
        yearlyFee
      }
    }
  `;

  const addonsQueryDocument = gql`
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

  async function storeSubscription(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  return {
    useQuery,
    request,
    plansQueryDocument,
    addonsQueryDocument,

    storeSubscription,
  };
};
