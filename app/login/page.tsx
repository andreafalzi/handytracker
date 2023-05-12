'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import Input from '../components/input/input';
import { AiFillEyeInvisible } from 'react-icons/ai';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('You are loggeg in');
    setCookie('authorized', 'true');
    router.push('/');
  };

  return (
    <>
      <form className='flex flex-col items-center mt-20 gap-5' onSubmit={handleSubmit}>
        <h3 className='text-white text-2xl'>Login</h3>
        {/* <Input id='email' label='Email' type='email' required />
        <Input id='password' label='Password' type='password' icon={AiFillEyeInvisible} required /> */}
        <input
          className='w-2/3 rounded-md py-2 px-2'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='w-2/3 rounded-md py-2 px-2'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='bg-white py-3 px-4 text-cyan-800 rounded-full uppercase font-[700] drop-shadow-xl w-2/3 cursor-pointer'
          type='submit'
        >
          Submit
        </button>
        <p className='text-white text-xs'>
          don't you have an account yet?
          <Link className='ml-2 text-amber-500' href={'/signup'}>
            Sign Up
          </Link>{' '}
        </p>
      </form>
      <div className='flex flex-col items-center mt-10 gap-2'>
        <button className='bg-white py-3 px-4 border-solid border-2 border-slate-700 text-slate-700 rounded-full uppercase font-[700] drop-shadow-xl w-2/3 cursor-pointer'>
          Log In with Google
        </button>
        <button className='bg-white py-3 px-4 border-solid border-2 border-blue-800 text-blue-800 rounded-full uppercase font-[700] drop-shadow-xl w-2/3 cursor-pointer'>
          Log In with Facebook
        </button>
      </div>
    </>
  );
};
export default LoginPage;
