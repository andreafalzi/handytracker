'use client';

import { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';

interface InputProps {
  id: string;
  label: string;
  type: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  icon?: IconType;
}

function funcShowPassword(type: string, showPassword: boolean) {
  if (type != 'password') return;
  if (type === 'password') {
    return showPassword ? 'text' : 'password';
  }
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
  icon: Icon,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className='relative w-2/3'>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        className={`
        w-full 
        rounded-md
        border-2
        outline-none 
        py-4 
        px-2 
        peer 
        transition 
        disabled:opacity-70 
        disabled:cursor-not-allowed 
        ${errors[id] ? 'border-red-600' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-red-600' : 'focus:border-black'}
        `}
        type={funcShowPassword(type, showPassword)}
      />
      {Icon && (
        <Icon
          size={24}
          className='absolute right-3 text-gray-500 opacity-70 top-2/4 -translate-y-2/4'
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
      <label
        className={`
        absolute 
        left-2 
        top-0.5
      text-black
        opacity-50
        text-[0.9rem]
        duration-150
        origin-top-left
        transform
        peer-focus:text-xs
        peer-focus:opacity-100
      `}
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
