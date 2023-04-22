import { useAtom } from 'jotai';
import { stepStore } from '../../store/store';

type Props = {
  btnText: string;
  disabled?: boolean;
};

function NavButtons(props: Props): JSX.Element {
  const [currentStep, setStep] = useAtom(stepStore);

  function stepBack(): void {
    setStep(currentStep - 1);
  }

  return (
    <div className="fixed xl:relative left-0 bottom-0 bg-white w-full py-3 xl:py-0 xl:mb-5">
      <div className="mx-auto flex items-center place-content-between max-w-[375px] px-5 xl:px-0 xl:max-w-none w-full">
        {currentStep > 1 ? (
          <button type="button" onClick={stepBack} className="text-cool-gray">
            Go Back
          </button>
        ) : (
          <span></span>
        )}
        <button
          type="submit"
          disabled={props.disabled}
          className="rounded-md bg-marine-blue text-white px-5 py-3 hover:bg-purplish-blue transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-marine-blue disabled:hover:text-white"
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

export default NavButtons;
