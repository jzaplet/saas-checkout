import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { plansStore, selectedBillingIntervalStore, selectedPlanStore, stepStore } from '../store/store';
import { Billing, Plan } from '../api/types';
import Header from './section/Header';
import NavButtons from './stepper/NavButtons';
import Spinner from './icons/Spinner';
import ImgArcade from '../../assets/images/icon-arcade.svg';
import ImgAdvanced from '../../assets/images/icon-advanced.svg';
import ImgPro from '../../assets/images/icon-pro.svg';

function SelectPlan(): JSX.Element {
  const [, setStep] = useAtom(stepStore);
  const [plans, setPlans] = useAtom(plansStore);
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanStore);
  const [selectedBillingInterval, setSelectedBillingInterval] = useAtom(selectedBillingIntervalStore);

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

  function onSubmit(): void {
    setStep(3);
  }

  function getPlanImage(id: string): string {
    const imageMap = [
      { id: 'plan-1', image: ImgArcade },
      { id: 'plan-2', image: ImgAdvanced },
      { id: 'plan-3', image: ImgPro },
    ];

    const image = imageMap.find((v) => v.id === id);

    return image ? image.image : '//dummyimage.com/40x40';
  }

  function toggleBillingInterval(): void {
    setSelectedBillingInterval(monthlySubs() ? Billing.year : Billing.month);
  }

  function monthlySubs(): boolean {
    return selectedBillingInterval === Billing.month;
  }

  useEffect(() => {
    fetchPlans();
  }, [plans]);

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Select your plan" description="You have the option of monthly or yearly billng." />
      <div>
        {plans.length < 1 && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}

        <div className="grid grid-cols-3 gap-4">
          {plans?.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={[
                'border border-light-gray',
                'rounded-md',
                'p-4',
                'min-h-[200px]',
                'grid',
                'content-between',
                'cursor-pointer',
                'transition-colors duration-300 ease-in-out',
                'hover:border-purplish-blue hover:bg-alabaster',
                selectedPlan?.id === plan.id ? 'border-purplish-blue bg-alabaster' : '',
              ].join(' ')}
            >
              <div>
                <img src={getPlanImage(plan.id)} alt={plan.name} />
              </div>
              <div>
                <div className="font-bold text-marine-blue">{plan.name}</div>
                <div className="text-cool-gray">
                  <div className="leading-7">${monthlySubs() ? plan.monthlyFee + '/mo' : plan.yearlyFee + '/yr'}</div>
                  {!monthlySubs() && <div className="text-sm text-marine-blue">2 months free</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {plans.length !== 0 && (
          <div className="mt-5">
            <div className="bg-alabaster rounded-md p-3 flex gap-5 justify-center text-cool-gray">
              <div className={`font-bold ${selectedBillingInterval === Billing.month ? 'text-marine-blue' : ''}`}>
                Monthly
              </div>
              <div
                onClick={toggleBillingInterval}
                className={[
                  'rounded-full p-1 bg-marine-blue w-[50px] cursor-pointer flex',
                  selectedBillingInterval === Billing.month ? 'justify-start' : 'justify-end',
                ].join(' ')}
              >
                <div className="rounded-full bg-white w-[1.125rem] h-[1.125rem]"></div>
              </div>
              <div className={`font-bold ${selectedBillingInterval === Billing.year ? 'text-marine-blue' : ''}`}>
                Yearly
              </div>
            </div>
          </div>
        )}
      </div>

      <NavButtons btnText="Next step" disabled={plans.length < 1 || !selectedPlan} />
    </form>
  );
}

export default SelectPlan;
