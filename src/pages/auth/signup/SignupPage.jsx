import LoginHeader from '../components/LoginHeader';
import Signup from '../components/Signup';

export default function SignupPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center gap-4 mx-8">
      <div
        className="md:w-1/2 h-auto md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./src/assets/license.png')" }}
      ></div>

      <div className="flex flex-col justify-center md:w-1/2 p-4">
        <div className="max-w-md mx-auto"></div>
        <LoginHeader
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />

        <Signup />
      </div>
    </div>
  );
}



