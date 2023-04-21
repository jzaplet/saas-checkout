import { useAtom } from 'jotai';
import { step } from '../../store/store';

type Props = {
  btnText: string;
};

function NavButtons(props: Props): JSX.Element {
  const [currentStep, setStep] = useAtom(step);

  function stepBack(): void {
    setStep(currentStep - 1);
  }

  return (
    <div className="flex place-content-between mb-4 w-full">
      {currentStep > 1 ? (
        <button type="button" onClick={stepBack} className="text-cool-gray">
          Go Back
        </button>
      ) : (
        <span></span>
      )}
      <button
        type="submit"
        className="rounded-md bg-marine-blue text-white px-5 py-3 hover:bg-purplish-blue transition-colors duration-300"
      >
        {props.btnText}
      </button>
    </div>
  );
}

export default NavButtons;
