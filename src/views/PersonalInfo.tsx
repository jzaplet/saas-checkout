import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../components/section/Header';
import NavButtons from '../components/section/NavButtons';
import TextInput from '../components/forms/inputs/TextInput';
import { personalDataStore, stepStore } from '../store/store';

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

// Todo: regex for email & phone
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  phone: yup.string().required('Phone is required'),
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
          placeholder="e.g. +1 234 567 890"
          error={errors.phone}
          register={register}
        />
      </div>
      <NavButtons btnText="Next step" />
    </form>
  );
}

export default PersonalInfo;
