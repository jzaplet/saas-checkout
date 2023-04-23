import { Plan } from '../../api/types';
import ImgArcade from '../../../assets/images/icon-arcade.svg';
import ImgAdvanced from '../../../assets/images/icon-advanced.svg';
import ImgPro from '../../../assets/images/icon-pro.svg';
import { useMonthlyBilling } from '../hooks/useMonthlyBilling';

type Props = {
  plan: Plan;
  isSelected: boolean;
  onClick: () => void;
};

function getPlanImage(id: string): string {
  const imageMap = [
    { id: 'plan-1', image: ImgArcade },
    { id: 'plan-2', image: ImgAdvanced },
    { id: 'plan-3', image: ImgPro },
  ];

  const image = imageMap.find((v) => v.id === id);

  return image ? image.image : '//dummyimage.com/40x40';
}

function AddonSelect(props: Props): JSX.Element {
  const { isMonthlyBilling } = useMonthlyBilling();

  return (
    <div
      onClick={() => props.onClick()}
      className={[
        'border border-light-gray',
        'rounded-md',
        'p-4',
        'xl:min-h-[200px]',
        'flex xl:grid',
        'content-between',
        'cursor-pointer',
        'transition-colors duration-300 ease-in-out',
        'hover:border-purplish-blue hover:bg-alabaster',
        props.isSelected ? 'border-purplish-blue bg-alabaster' : '',
      ].join(' ')}
    >
      <div className="pr-4">
        <img src={getPlanImage(props.plan.id)} alt={props.plan.name} width={40} height={40} />
      </div>
      <div>
        <div className="font-bold text-marine-blue">{props.plan.name}</div>
        <div className="text-cool-gray">
          <div className="xl:leading-7">
            ${isMonthlyBilling() ? props.plan.monthlyFee + '/mo' : props.plan.yearlyFee + '/yr'}
          </div>
          {!isMonthlyBilling() && <div className="text-sm text-marine-blue">2 months free</div>}
        </div>
      </div>
    </div>
  );
}

export default AddonSelect;
