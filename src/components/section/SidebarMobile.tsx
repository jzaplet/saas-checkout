import React from 'react';
import { useAtom } from 'jotai';
import { stepStore } from '../../store/store';
import { router } from '../../router/router';
import ImgSideBarMobile from '../../../assets/images/bg-sidebar-mobile.svg';
import StepCircle from '../stepper/StepCircle';

function SidebarMobile() {
  const [currentStep] = useAtom(stepStore);
  return (
    <div className="relative xl:hidden">
      <div className="absolute w-full" style={{ zIndex: -1 }}>
        <img src={ImgSideBarMobile} alt="Checkout BG" className="mx-auto max-w-[375px]" width={375} height={172} />
      </div>
      <div className="flex justify-center gap-2 py-5">
        {router.slice(0, 4).map((step, i) => (
          <StepCircle num={i + 1} active={i === currentStep - 1 || (i == 3 && currentStep === 5)} key={step.num} />
        ))}
      </div>
    </div>
  );
}

export default SidebarMobile;
