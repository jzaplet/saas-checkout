import * as yup from 'yup';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { personalDataStore, stepStore } from '../store/store';
import Header from '../components/section/Header';
import NavButtons from '../components/section/NavButtons';
import TextInput from '../components/forms/inputs/TextInput';

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .test((value, context) => {
      return /^\S+@\S+\.\S+$/.test(value) || context.createError({ message: 'E-mail is not valid' });
    }),
  phone: yup
    .string()
    .required('Phone is required')
    .test((value, context) => {
      return /^(\+?420)?(\d?){9}$/.test(value) || context.createError({ message: 'Phone is not valid' });
    })
    .transform((value) => (value ? value.replace(/\s/g, '') : value)),
});

function PersonalInfo(): JSX.Element {
  const [, setStep] = useAtom(stepStore);
  const [pData, setPersonalData] = useAtom(personalDataStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema), values: pData });

  const onSubmit = handleSubmit((data) => {
    setPersonalData(data);
    setStep(2);
  });

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Personal info" description="Please provide your name, email address, and phone number." />
      <div className="grid gap-5 mt-5 xl:mt-0">
        <TextInput label="Name" fieldName="name" error={errors.name} register={register} />
        <TextInput label="E-mail Address" fieldName="email" error={errors.email} register={register} />
        <TextInput
          label="Phone Number"
          fieldName="phone"
          placeholder="e.g. +420 123 456 789"
          error={errors.phone}
          register={register}
        />
      </div>
      <NavButtons btnText="Next step" />
    </form>
  );
}

export default PersonalInfo;
