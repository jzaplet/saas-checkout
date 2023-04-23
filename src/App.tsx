import React from 'react';
import { useAtom } from 'jotai';
import { stepStore } from './store/store';
import { router } from './router/router';
import SidebarDesktop from './components/section/SidebarDesktop';
import SidebarMobile from './components/section/SidebarMobile';

function App(): JSX.Element {
  const [currentStep] = useAtom(stepStore);

  function createView(): JSX.Element {
    const component = router.find((s) => s.num === currentStep)?.component;
    return component ? React.createElement(component) : <></>;
  }

  return (
    <>
      <SidebarMobile />
      <div className="mx-auto max-w-[375px] xl:max-w-[1130px] p-5 pt-0">
        <div className="xl:flex bg-white shadow-lg rounded-lg p-5 mb-20 xl:mb-0">
          <SidebarDesktop />
          <div className="flex justify-center xl:w-[855px]">
            <div className="xl:w-[545px]">{createView()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
