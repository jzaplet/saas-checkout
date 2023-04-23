import { useMonthlyBilling } from '../hooks/useMonthlyBilling';

function BillingIntervalToggle(): JSX.Element {
  const { switchBillingInterval, isMonthlyBilling } = useMonthlyBilling();

  return (
    <div className="mt-5">
      <div className="bg-alabaster rounded-md p-3 flex gap-5 justify-center text-cool-gray">
        <div className={`font-bold ${isMonthlyBilling() ? 'text-marine-blue' : ''}`}>Monthly</div>
        <div
          onClick={switchBillingInterval}
          className={[
            'rounded-full p-1 bg-marine-blue w-[50px] cursor-pointer flex',
            isMonthlyBilling() ? 'justify-start' : 'justify-end',
          ].join(' ')}
        >
          <div className="rounded-full bg-white w-[1.125rem] h-[1.125rem]"></div>
        </div>
        <div className={`font-bold ${!isMonthlyBilling() ? 'text-marine-blue' : ''}`}>Yearly</div>
      </div>
    </div>
  );
}

export default BillingIntervalToggle;
