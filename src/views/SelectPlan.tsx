import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { plansStore, selectedPlanStore, stepStore } from '../store/store';
import { Plan } from '../api/types';
import Header from '../components/section/Header';
import NavButtons from '../components/section/NavButtons';
import Spinner from '../components/icons/Spinner';
import AddonSelect from '../components/forms/AddonSelect';
import BillingIntervalToggle from '../components/forms/BillingIntervalToggle';

function SelectPlan(): JSX.Element {
  const [, setStep] = useAtom(stepStore);
  const [plans, setPlans] = useAtom(plansStore);
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanStore);

  async function fetchPlans(): Promise<void> {
    // TODO: Implement GraphQL query... ????
    // const resp = await fetch('http://localhost:5173/plans', { method: 'GET' });
    // return await resp.json();
    // //const { data } = useQuery({ queryKey: ['groups'], queryFn: fetchGroups })

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setPlans([
      { __typename: 'Plan', id: 'plan-1', name: 'Arcade', monthlyFee: 9, yearlyFee: 90 },
      { __typename: 'Plan', id: 'plan-2', name: 'Advanced', monthlyFee: 12, yearlyFee: 120 },
      { __typename: 'Plan', id: 'plan-3', name: 'Pro', monthlyFee: 15, yearlyFee: 150 },
    ]);
  }

  useEffect(() => {
    fetchPlans();
  }, [plans]);

  return (
    <form onSubmit={() => setStep(3)} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Select your plan" description="You have the option of monthly or yearly billng." />
      <div className="mt-5 xl:mt-0">
        {plans.length < 1 && (
          <div className="flex justify-center py-5">
            <Spinner />
          </div>
        )}

        <div className="grid xl:grid-cols-3 gap-4">
          {plans?.map((plan) => (
            <AddonSelect
              key={plan.id}
              plan={plan}
              isSelected={selectedPlan?.id === plan.id}
              onClick={() => setSelectedPlan(plan)}
            />
          ))}
        </div>

        {plans.length !== 0 && <BillingIntervalToggle />}
      </div>

      <NavButtons btnText="Next step" disabled={plans.length < 1 || !selectedPlan} />
    </form>
  );
}

export default SelectPlan;
