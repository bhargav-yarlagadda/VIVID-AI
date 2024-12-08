import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-200 to-blue-900 flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
