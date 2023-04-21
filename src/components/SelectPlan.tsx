import Header from './section/Header';
import NavButtons from './stepper/NavButtons';

function SelectPlan(): JSX.Element {
  return (
    <div className="grid grid-cols-1 place-content-between h-full">
      <Header title="Select your plan" description="You have the option of monthly or yearly billng." />
      <div>...</div>
      <NavButtons btnText="Next step" />
    </div>
  );
}

export default SelectPlan;
