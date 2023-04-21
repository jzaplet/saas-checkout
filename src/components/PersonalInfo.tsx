import Header from './context/Header';
import Footer from './context/Footer';

function nextStep(): void {
  console.log('next step');
}

function PersonalInfo(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 place-content-between h-full">
      <Header title="Personal info" description="Please provide your name, email address, and phone number." />
      <div>Some form fields will be there...</div>
      <Footer step={2} btnText="Next step" btnHandler={nextStep} />
    </div>
  );
}

export default PersonalInfo;
