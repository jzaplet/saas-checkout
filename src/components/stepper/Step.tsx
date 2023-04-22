import StepCircle from './StepCircle';

type Props = {
  num: number;
  name: string;
  active: boolean;
};

function Step(props: Props): JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <StepCircle num={props.num} active={props.active} />
      <div className="text-white uppercase">
        <div className="text-light-gray text-sm">Step {props.num}</div>
        <div className="font-bold">{props.name}</div>
      </div>
    </div>
  );
}

export default Step;
