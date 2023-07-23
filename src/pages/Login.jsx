import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <section className=" login bg-base-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          Login Page
        </Link>
        <div className="w-full bg-white rounded-lg shadow-2xl border border-primary dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
