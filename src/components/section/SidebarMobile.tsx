import React from 'react';
import { useAtom } from 'jotai/index';
import { stepStore } from '../../store/store';
import { stepViews } from '../../store/stepViews';
import ImgSideBarMobile from '../../../assets/images/bg-sidebar-mobile.svg';
import StepCircle from '../stepper/StepCircle';

function SidebarMobile() {
  const [currentStep] = useAtom(stepStore);
  return (
    <div className="relative xl:hidden">
      <img src={ImgSideBarMobile} alt="Checkout BG" className="absolute w-full max-h-[300px]" style={{ zIndex: -1 }} />
      <div className="flex justify-center gap-2 py-5">
        {stepViews.slice(0, 4).map((step, i) => (
          <StepCircle num={i + 1} active={i === currentStep - 1 || (i == 3 && currentStep === 5)} key={step.num} />
        ))}
      </div>
    </div>
  );
}

export default SidebarMobile;
