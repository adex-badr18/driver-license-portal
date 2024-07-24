import LoginHeader from '../components/LoginHeader';
import Signup from '../components/Signup';
import background from "../../../assets/license.png"

export default function SignupPage() {
  return (
    <div className="flex md:flex-row h-full  items-center gap-4">
      <div
        className=" hidden md:block w-3/4 h-full min-h-[45rem] bg-cover   bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${background}')` }}
      ></div>

      <div className="flex flex-col justify-center   w-full py-6 md:p-4 ">
        <div className=" w-full md:w-[30rem] mx-auto">
          <LoginHeader
            heading="Signup"
          />

          <Signup
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
        </div>
      </div>
    </div>
  );
}



