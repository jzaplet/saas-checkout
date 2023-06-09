import React from 'react';
import Step from '../stepper/Step';
import { useAtom } from 'jotai';
import { stepStore } from '../../store/store';
import { router } from '../../router/router';
import ImgSideBarDesktop from '../../../assets/images/bg-sidebar-desktop.svg';

function SidebarDesktop() {
  const [currentStep] = useAtom(stepStore);
  return (
    <div className="xl:w-[275px] relative hidden xl:block">
      <img src={ImgSideBarDesktop} alt="Checkout BG" width={247} height={568} />
      <div className="absolute inset-0 p-8">
        <div className="flex flex-col gap-y-8">
          {router.slice(0, 4).map((step, i) => (
            <Step
              num={i + 1}
              name={step.name}
              active={i === currentStep - 1 || (i == 3 && currentStep === 5)}
              key={step.num}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarDesktop;
