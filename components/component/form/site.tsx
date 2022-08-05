import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler, Controller } from "react-hook-form";

interface IFormValues {
  _id?: string
  title: string;
  domain: string;
  logo: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  numberPhone: number;
  address: string;
  location: string;
  description: string;
  type: string;
  client: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label className="block text-xs md:text-sm font-medium text-gray-700" >{label}</label>
    <input className="my-2 focus:ring-orange-500 focus:outline-none focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm  rounded-md p-1 border border-gray-300 " {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
// eslint-disable-next-line react/display-name
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label className="block text-xs md:text-sm font-medium text-gray-700">{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs md:text-sm capitalize">
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export const SiteF = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
      <Input label="title" register={register} required />
      {errors.title && "First name is required"}
      
      <Select label="Type" {...register("type")} />
      <Controller
        name="type"
        render={({ field }) => {
          // return <input {...field} {...register('test')} />; ❌ double up the registration
          return <input {...field} />; // ✅
        }}
      />
      <input type="submit" />
    </form>
  );
};
