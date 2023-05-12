import ToasterProvider from '../providers/ToasterProvider';

const SignupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center bg-cyan-800'>
      <div className='max-w-fit mx-auto'>
        <h1 className='font-[700] text-5xl text-white text-center'>Handytracker</h1>
        <h5 className='font-[400] text-white text-right'>App</h5>
      </div>
      <ToasterProvider />
      {children}
    </div>
  );
};
export default SignupLayout;
