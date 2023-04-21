type Props = {
  step: number;
  btnText: string;
  btnHandler: () => void;
};

function stepBack(): void {
  console.log('step back');
}

function Footer(props: Props): JSX.Element {
  return (
    <div className="flex place-content-between mb-4 w-full">
      {props.step > 1 ? (
        <button onClick={stepBack} className="text-cool-gray">
          Go Back
        </button>
      ) : (
        <span></span>
      )}
      <button
        onClick={props.btnHandler}
        className="rounded-md bg-marine-blue text-white px-5 py-3 hover:bg-purplish-blue transition-colors duration-300"
      >
        Next step
      </button>
    </div>
  );
}

export default Footer;
