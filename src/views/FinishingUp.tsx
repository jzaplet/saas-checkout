import { useAtom } from 'jotai';
import { selectedAddonsStore, selectedPlanStore, stepStore } from '../store/store';
import Header from '../components/section/Header';
import NavButtons from '../components/section/NavButtons';
import { useMonthlyBilling } from '../hooks/useMonthlyBilling';

function FinishingUp(): JSX.Element {
  const { isMonthlyBilling } = useMonthlyBilling();
  const [, setStep] = useAtom(stepStore);
  const [plan] = useAtom(selectedPlanStore);
  const [addons] = useAtom(selectedAddonsStore);

  function onSubmit(): void {
    // TODO: GraphQL mutation to create a new subscription
    setStep(5);
  }

  function sumPrice(): number {
    const sumAddonsPrice =
      addons.length > 0
        ? addons.reduce((acc, addon) => acc + (isMonthlyBilling() ? addon.monthlyFee : addon.yearlyFee), 0)
        : 0;

    const planPrice = plan ? (isMonthlyBilling() ? plan.monthlyFee : plan.yearlyFee) : 0;

    return sumAddonsPrice + planPrice;
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 place-content-between h-full">
      <div>
        <Header title="Finishing Up" description="Double check everything looks OK before confirming." />
        <div className="mt-5">
          <div className="bg-alabaster p-6 rounded-lg">
            <div className="flex justify-between">
              <div>
                <div className="text-md font-bold text-marine-blue">
                  {plan?.name} ({isMonthlyBilling() ? 'Monthly' : 'Yearly'})
                </div>
                <button className="text-sm underline text-purplish-blue" type="button" onClick={() => setStep(2)}>
                  Change
                </button>
              </div>
              <div>
                <div className="text-md font-bold text-marine-blue">
                  ${isMonthlyBilling() ? plan?.monthlyFee + '/mo' : plan?.yearlyFee + '/yr'}
                </div>
              </div>
            </div>

            {addons?.length > 0 && (
              <div className="mt-4 border-t border-magnolia">
                {addons.map((addon) => (
                  <div className="flex justify-between text-cool-gray mt-4">
                    <div>{addon.name}</div>
                    <div className="text-marine-blue">
                      ${isMonthlyBilling() ? addon?.monthlyFee + '/mo' : addon?.yearlyFee + '/yr'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between mt-5 px-6">
            <div className="text-cool-gray">Total (per {isMonthlyBilling() ? 'month' : 'year'})</div>
            <div className="text-purplish-blue text-xl font-bold">
              ${isMonthlyBilling() ? sumPrice() + '/mo' : sumPrice() + '/yr'}
            </div>
          </div>
        </div>
      </div>
      <NavButtons btnText="Confirm" />
    </form>
  );
}

export default FinishingUp;
