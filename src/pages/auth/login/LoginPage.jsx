import Login from '../components/Login';
import LoginHeader from '../components/LoginHeader';

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center gap-4 mx-8">
      <div
        className="md:w-1/2 h-auto md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./src/assets/license.png')" }}
      ></div>

      <div className="flex flex-col justify-center md:w-1/2 p-4 ">
        <div className="max-w-md mx-auto"></div>
        <LoginHeader
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </div>
  );
}
