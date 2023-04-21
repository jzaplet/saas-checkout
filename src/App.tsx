import React from 'react';
import { useAtom } from 'jotai';
import { stepStore } from './store/store';
import SideBarDesktop from './../assets/images/bg-sidebar-desktop.svg';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import PickAddons from './components/PickAddons';
import FinishingUp from './components/FinishingUp';
import ThankYou from './components/ThankYou';
import Step from './components/stepper/Step';

const components = {
  1: PersonalInfo,
  2: SelectPlan,
  3: PickAddons,
  4: FinishingUp,
  5: ThankYou,
};

const stepNames: string[] = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

function App() {
  const [currentStep] = useAtom(stepStore);

  return (
    <div className="mx-auto w-[1130px] p-5 flex bg-white shadow-lg rounded-lg my-5">
      <div className="w-[275px] relative">
        <img src={SideBarDesktop} alt="Checkout BG" />
        <div className="absolute inset-0 p-8">
          <div className="flex flex-col gap-y-8">
            {stepNames.map((step, i) => (
              <Step step={i + 1} name={step} active={i === currentStep - 1 || (currentStep === 5 && i === 3)} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[855px]">
        <div className="w-[545px]">
          {
            // @ts-ignore // TODO: Fix this
            React.createElement(components[currentStep])
          }
        </div>
      </div>
    </div>
  );
}

export default App;
