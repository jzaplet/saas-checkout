import { useAtom } from 'jotai';
import { step } from '../store/store';
import Header from './section/Header';
import NavButtons from './stepper/NavButtons';

function SelectPlan(): JSX.Element {
  const [, setStep] = useAtom(step);

  function onSubmit(): void {
    setStep(3);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Select your plan" description="You have the option of monthly or yearly billng." />
      <div>...</div>
      <NavButtons btnText="Next step" />
    </form>
  );
}

export default SelectPlan;
