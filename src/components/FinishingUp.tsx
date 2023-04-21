import { useAtom } from 'jotai';
import { stepStore } from '../store/store';
import Header from './section/Header';
import NavButtons from './stepper/NavButtons';

function FinishingUp(): JSX.Element {
  const [, setStep] = useAtom(stepStore);

  function onSubmit(): void {
    setStep(5);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Finishing Up" description="Double check everything looks OK before confirming." />
      <div>...</div>
      <NavButtons btnText="Confirm" />
    </form>
  );
}

export default FinishingUp;
