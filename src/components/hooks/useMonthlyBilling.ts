import { useAtom } from 'jotai/index';
import { selectedBillingIntervalStore } from '../../store/store';
import { Billing } from '../../api/types';

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
