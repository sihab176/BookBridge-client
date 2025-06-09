import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  useEffect(() => {
    document.title = "virtual Book | register";
  }, []);
  //

  //
  const { createUser, googleLogin, updateUser, setUser } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [requredError, setRequredError] = useState("");

  // register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setRequredError("");
    const regex = /^(?=.*[A-Z]).+$/;
    const lowercaseRegex = /[a-z]/;
    if (regex.test(password) === false) {
      setRequredError("password must be one Uppercase");
      toast.warn("password must be one Uppercase");
      return;
    } else if (lowercaseRegex.test(password) === false) {
      setRequredError("password must be lowersCase");
      toast.warn("password must be one lowersCase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const users = result.users;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...users, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("welcome to event conference");
          })
          .catch((error) => {
            setUser(users);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("welcome to event conference");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="pt-14">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  mx-auto bg-white border">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign Up to access your account
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-3">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="write name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="pu1o6"
              />
            </div>{" "}
            {/* photo url */}
            <div>
              <label className="block mb-2 text-sm">photo url</label>
              <input
                type="text"
                name="photo"
                placeholder="https://....."
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="pu1o6"
              />
            </div>
            {/* email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="lora@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="pu1o6"
              />
            </div>
            {/* password */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              {/* input */}
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  fdprocessedid="e17zgq"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-3 right-6"
                >
                  {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </button>
                {/* <IoEyeOutline /> */}
              </div>
              <h1 className="text-red-600">{requredError}</h1>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-400 hover:bg-blue-900 hover:text-white"
                fdprocessedid="xai2ci"
              >
                Sign Up
              </button>
              <p className="text-center text-gray-400 py-2">
                -------------- or ------------
              </p>
              {/* Google */}
              <button
                onClick={handleGoogle}
                className="btn hover:bg-pink-600  w-full bg-white text-black border-[#e5e5e5]"
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
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account ?
              <Link to="/login">
                {" "}
                <button
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-600"
                >
                  Login
                </button>
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
