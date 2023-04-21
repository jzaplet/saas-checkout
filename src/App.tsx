import PersonalInfo from './components/PersonalInfo';
import SideBarDesktop from './../assets/images/bg-sidebar-desktop.svg';
import Step from './components/stepper/Step';

function App() {
  return (
    <div className="mx-auto w-[1130px] p-5 flex bg-white shadow-lg rounded-lg">
      <div className="w-[275px] relative">
        <img src={SideBarDesktop} alt="Checkout BG" />
        <div className="absolute inset-0 p-8">
          <div className="flex flex-col gap-y-8">
            <Step step={1} name="Your info" active={false} />
            <Step step={2} name="Select plan" active={false} />
            <Step step={3} name="Add-ons" active={true} />
            <Step step={4} name="Summary" active={false} />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[855px]">
        <div className="w-[545px]">
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
