type Props = {
  num: number;
  active: boolean;
};

function Step(props: Props): JSX.Element {
  return (
    <div
      className={`
        w-10 h-10 rounded-full border flex items-center justify-center font-bold 
        ${props.active ? 'text-marine-blue bg-light-blue border-pastel-blue' : 'text-white border-white'}
      `}
    >
      {props.num}
    </div>
  );
}

export default Step;
