'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { setCookie } from 'cookies-next';
import { toast } from 'react-hot-toast';

import { AiFillEyeInvisible } from 'react-icons/ai';
import Input from '../components/input/input';

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post('/api/register', data)
      .then(() => {
        router.push('/');
        setCookie('authorized', 'true');
      })
      .catch((error) => {
        toast.error('Something went wrong');
      });
  };

  return (
    <>
      <form className='flex flex-col items-center mt-20 gap-5' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-white text-2xl'>Sign Up</h3>
        <Input
          id='username'
          label='Username'
          type='text'
          required
          register={register}
          errors={errors}
        />
        <Input id='email' label='Email' type='text' required register={register} errors={errors} />
        <Input
          id='password'
          label='Password'
          type='password'
          icon={AiFillEyeInvisible}
          required
          register={register}
          errors={errors}
        />

        <button
          className='bg-white py-3 px-4 text-cyan-800 rounded-full uppercase font-[700] drop-shadow-xl w-2/3 cursor-pointer outline-none border-2 focus:border-black'
          type='submit'
        >
          Submit
        </button>
        <p className='text-white text-xs'>
          do you already have an account?
          <Link className='ml-2 text-amber-500' href={'/login'}>
            Log In
          </Link>
        </p>
      </form>
    </>
  );
};
export default SignupPage;
