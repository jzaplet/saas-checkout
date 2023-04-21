import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { plansStore, selectedPlanStore, stepStore } from '../store/store';
import Header from './section/Header';
import NavButtons from './stepper/NavButtons';
import { Plan } from '../api/types';
import ImgArcade from '../../assets/images/icon-arcade.svg';
import ImgAdvanced from '../../assets/images/icon-advanced.svg';
import ImgPro from '../../assets/images/icon-pro.svg';

function SelectPlan(): JSX.Element {
  const [, setStep] = useAtom(stepStore);
  const [plans, setPlans] = useAtom(plansStore);
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanStore);

  function getPlanImage(planName: string): string {
    const imageMap = [
      { name: 'Arcade', image: ImgArcade },
      { name: 'Advanced', image: ImgAdvanced },
      { name: 'Pro', image: ImgPro },
    ];

    const image = imageMap.find((v) => v.name === planName);

    return image ? image.image : '//dummyimage.com/40x40';
  }

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

  useEffect(() => {
    fetchPlans();
  }, [plans]);

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Select your plan" description="You have the option of monthly or yearly billng." />
      <div className="grid grid-cols-3 gap-4">
        {plans.length < 1 && <span>Loading...</span>}
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
              <img src={getPlanImage(plan.name)} alt={plan.name} />
            </div>
            <div>
              <div className="font-bold">{plan.name}</div>
              <div className="text-sm text-cool-gray">${plan.monthlyFee}/mo</div>
            </div>
          </div>
        ))}
      </div>
      <NavButtons btnText="Next step" disabled={plans.length < 1 || !selectedPlan} />
    </form>
  );
}

export default SelectPlan;
