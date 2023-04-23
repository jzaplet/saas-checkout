import { Addon } from '../../api/types';
import { useMonthlyBilling } from '../../hooks/useMonthlyBilling';
import AddonCheckbox from './AddonCheckbox';

type Props = {
  addon: Addon;
  isSelected: boolean;
  onClick: () => void;
};

function AddonSelect(props: Props): JSX.Element {
  const { isMonthlyBilling } = useMonthlyBilling();

  return (
    <div
      onClick={() => props.onClick()}
      className={[
        'border border-light-gray',
        'rounded-md',
        'p-5',
        'cursor-pointer',
        'transition-colors duration-300 ease-in-out',
        'hover:border-purplish-blue hover:bg-alabaster',
        props.isSelected ? 'border-purplish-blue bg-alabaster' : '',
      ].join(' ')}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-5">
            <AddonCheckbox checked={props.isSelected} />
          </div>
          <div>
            <div className="font-bold text-marine-blue">{props.addon.name}</div>
            <div className="text-cool-gray">{props.addon.description}</div>
          </div>
        </div>
        <div className="text-purplish-blue leading-7 text-md">
          +${isMonthlyBilling() ? props.addon.monthlyFee + '/mo' : props.addon.yearlyFee + '/yr'}
        </div>
      </div>
    </div>
  );
}

export default AddonSelect;
