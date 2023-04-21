type Props = {
  step: number;
  name: string;
  active: boolean;
};

function Step(props: Props): JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`
        w-10 h-10 rounded-full border flex items-center justify-center font-bold 
        ${props.active ? 'text-marine-blue bg-light-blue border-pastel-blue' : 'text-white border-white'}
      `}
      >
        {props.step}
      </div>
      <div className="text-white uppercase">
        <div className="text-light-gray text-sm">Step {props.step}</div>
        <div className="font-bold">{props.name}</div>
      </div>
    </div>
  );
}

export default Step;
