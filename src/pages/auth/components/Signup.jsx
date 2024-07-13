import { useState } from 'react';
import { signupFields } from '../constants/FormFields';
import { Link } from "react-router-dom";
import FormAction from './FormAction';
import Input from './Input';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup({ paragraph, linkUrl, linkName }) {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => { };

  return (
    <form className="space-y-6 p-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />

      </div>
      <p className="mt-2 text-center text-sm text-gray-600">
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className="font-medium text-custom-green hover:text-green-800"
        >
          {linkName}
        </Link>
      </p>
    </form>
  );
}
