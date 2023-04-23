import ImgCheckmark from '../../../assets/images/icon-checkmark.svg';

type Props = {
  checked: boolean;
};

function AddonCheckBox(props: Props): JSX.Element {
  return (
    <>
      {props.checked && (
        <div className="bg-purplish-blue w-6 h-6 rounded-md flex justify-center align-center p-1">
          <img src={ImgCheckmark} alt="Select plan" />
        </div>
      )}
      {!props.checked && <div className="w-6 h-6 rounded-md border border-light-gray" />}
    </>
  );
}

export default AddonCheckBox;
