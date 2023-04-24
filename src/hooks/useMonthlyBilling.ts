import { useAtom } from 'jotai';
import { Billing } from '../api/types';
import { selectedBillingIntervalStore } from '../store/store';

export const useMonthlyBilling = () => {
  const [selectedBillingInterval, setSelectedBillingInterval] = useAtom(selectedBillingIntervalStore);

  function isMonthlyBilling(): boolean {
    return selectedBillingInterval === Billing.month;
  }

  function switchBillingInterval(): void {
    setSelectedBillingInterval(isMonthlyBilling() ? Billing.year : Billing.month);
  }

  return {
    isMonthlyBilling,
    switchBillingInterval,
  };
};
