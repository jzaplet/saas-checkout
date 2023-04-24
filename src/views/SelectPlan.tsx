import { useAtom } from 'jotai';
import { plansQuery, queryRequest, useApi } from '../hooks/useApi';
import { plansStore, selectedPlanStore, stepStore } from '../store/store';
import Header from '../components/section/Header';
import NavButtons from '../components/section/NavButtons';
import Spinner from '../components/icons/Spinner';
import PlanSelect from '../components/forms/PlanSelect';
import BillingIntervalToggle from '../components/forms/BillingIntervalToggle';

function SelectPlan(): JSX.Element {
  const { useQuery } = useApi();
  const [, setStep] = useAtom(stepStore);
  const [plans, setPlans] = useAtom(plansStore);
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanStore);

  useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const { plans } = await queryRequest(plansQuery);
      setPlans(plans);
      return plans;
    },
  });

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
            <PlanSelect
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
