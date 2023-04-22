import React from 'react';
import { useAtom } from 'jotai';
import { stepStore } from './store/store';
import SideBarDesktop from './../assets/images/bg-sidebar-desktop.svg';
import PersonalInfo from './views/PersonalInfo';
import SelectPlan from './views/SelectPlan';
import PickAddons from './views/PickAddons';
import FinishingUp from './views/FinishingUp';
import ThankYou from './views/ThankYou';
import Step from './components/stepper/Step';

const steps = [
  { num: 1, name: 'Your info', component: PersonalInfo },
  { num: 2, name: 'Select plan', component: SelectPlan },
  { num: 3, name: 'Add-ons', component: PickAddons },
  { num: 4, name: 'Summary', component: FinishingUp },
  { num: 5, name: 'Thank you', component: ThankYou },
];

function App() {
  const [currentStep] = useAtom(stepStore);

  function createStepComponent(): JSX.Element {
    const component = steps.find((s) => s.num === currentStep)?.component;
    return component ? React.createElement(component) : <></>;
  }

  return (
    <div className="mx-auto xl:w-[1130px] p-5 xl:flex bg-white shadow-lg rounded-lg my-5">
      <div className="xl:w-[275px] relative">
        <img src={SideBarDesktop} alt="Checkout BG" />
        <div className="absolute inset-0 p-8">
          <div className="flex flex-col gap-y-8">
            {steps.slice(0, 4).map((step, i) => (
              <Step
                step={i + 1}
                name={step.name}
                active={i === currentStep - 1 || (i == 3 && currentStep === 5)}
                key={step.num}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center xl:w-[855px]">
        <div className="xl:w-[545px]">{createStepComponent()}</div>
      </div>
    </div>
  );
}

export default App;
