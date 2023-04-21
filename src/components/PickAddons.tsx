import { useAtom } from 'jotai';
import { stepStore } from '../store/store';
import Header from './section/Header';
import NavButtons from './stepper/NavButtons';

function PickAddons(): JSX.Element {
  const [, setStep] = useAtom(stepStore);

  function onSubmit(): void {
    setStep(4);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Pick add-ons" description="Add-ons help enhance your gamimg experience." />
      <div>...</div>
      <NavButtons btnText="Next step" />
    </form>
  );
}

export default PickAddons;
