import { FieldError, UseFormRegister } from 'react-hook-form';

type Props = {
  label: string;
  fieldName: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  placeholder?: string;
};

function TextInput(props: Props): JSX.Element {
  return (
    <div>
      <div className="flex place-content-between text-cool-gray font-sm mb-1">
        <label htmlFor={props.fieldName}>{props.label}</label>
        {props.error && <span className="text-strawberry-red font-bold">{props.error.message}</span>}
      </div>
      <input
        {...props.register(props.fieldName)}
        placeholder={props.placeholder}
        id={props.fieldName}
        type="text"
        className={[
          'p-3',
          'w-full',
          'rounded-md',
          'border-light-gray',
          'border active:border focus:border',
          'active:border-marine-blue focus:border-marine-blue',
          props.error
            ? 'border-strawberry-red active:border-strawberry-red focus:border-strawberry-red focus:ring-1 focus:ring-strawberry-red'
            : '',
        ].join(' ')}
      />
    </div>
  );
}

export default TextInput;
