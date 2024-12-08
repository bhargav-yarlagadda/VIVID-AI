import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-200 to-blue-900 flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
