/**
 * Copyright (c) 2023 Strategio Digital s.r.o.
 * @author Jiří Zapletal (https://strategio.dev, jz@strategio.dev)
 */
import { Addon, Plan } from '../api/types';

export const useApi = () => {
  async function fetchPlans(): Promise<Plan[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
      { __typename: 'Plan', id: 'plan-1', name: 'Arcade', monthlyFee: 9, yearlyFee: 90 },
      { __typename: 'Plan', id: 'plan-2', name: 'Advanced', monthlyFee: 12, yearlyFee: 120 },
      { __typename: 'Plan', id: 'plan-3', name: 'Pro', monthlyFee: 15, yearlyFee: 150 },
    ];
  }

  async function fetchAddons(): Promise<Addon[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      {
        __typename: 'Addon',
        id: 'addon-1',
        name: 'Online service',
        description: 'Access to multiplayer games',
        monthlyFee: 1,
        yearlyFee: 10,
      },
      {
        __typename: 'Addon',
        id: 'addon-2',
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyFee: 2,
        yearlyFee: 20,
      },
      {
        __typename: 'Addon',
        id: 'addon-3',
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        monthlyFee: 2,
        yearlyFee: 20,
      },
    ];
  }

  async function storeSubscription(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  return {
    fetchPlans,
    fetchAddons,
    storeSubscription,
  };
};
