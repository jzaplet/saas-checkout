import React from 'react';
import { useAtom } from 'jotai';
import { step } from './store/store';
import SideBarDesktop from './../assets/images/bg-sidebar-desktop.svg';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import PickAddons from './components/PickAddons';
import FinishingUp from './components/FinishingUp';
import Step from './components/stepper/Step';
import ThankYou from './components/ThankYou';

function App() {
  const [currentStep] = useAtom(step);
  const steps: string[] = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

  const components = {
    1: PersonalInfo,
    2: SelectPlan,
    3: PickAddons,
    4: FinishingUp,
    5: ThankYou,
  };

  return (
    <div className="mx-auto w-[1130px] p-5 flex bg-white shadow-lg rounded-lg">
      <div className="w-[275px] relative">
        <img src={SideBarDesktop} alt="Checkout BG" />
        <div className="absolute inset-0 p-8">
          <div className="flex flex-col gap-y-8">
            {steps.map((step, i) => (
              <Step step={i + 1} name={step} active={i === currentStep - 1 || (currentStep === 5 && i === 3)} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[855px]">
        <div className="w-[545px]">
          {
            // @ts-ignore
            React.createElement(components[currentStep])
          }
        </div>
      </div>
    </div>
  );
}

export default App;
