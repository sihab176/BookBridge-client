import React, { use, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  useEffect(() => {
    document.title = "Event | Login";
  }, []);
  //
  //   useEffect(() => {
  //     AOS.init();
  //     AOS.refresh();
  //   }, []);

  const { loginUser, googleLogin } = use(AuthContext);
  const navigate = useNavigate("/");
  const location = useLocation();
  // console.log(location);

  //handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Login successfully ");
      })
      .catch((error) => {
        // console.log(error);
        toast.warn(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        toast.success("Login successfully ");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        toast.success(error.message);
      });
  };

  return (
    <div className="my-14 w-11/12 mx-auto">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10   bg-white border">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="pu1o6"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="e17zgq"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-400 "
                fdprocessedid="xai2ci"
              >
                LogIn
              </button>
              <p className="text-center text-gray-400">
                -------------- or ------------
              </p>
            </div>
            {/* Google */}
            <button
              onClick={handleGoogleLogIn}
              className="btn  w-full bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link to="/register">
                {" "}
                <button
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-600"
                >
                  Sign up
                </button>
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
      {/* ----------------------- animation ------------------------ */}
      <div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
