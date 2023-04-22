import ImgThankYou from '../../assets/images/icon-thank-you.svg';

function ThankYou(): JSX.Element {
  return (
    <form className="grid grid-cols-1 place-content-center text-center h-full">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-center">
          <img src={ImgThankYou} alt="Thank you" />
        </div>
        <h1 className="text-3xl font-bold py-4 text-marine-blue">Thank you!</h1>
        <p className="text-lg text-cool-gray max-w-[500px]">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
          feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </form>
  );
}

export default ThankYou;
