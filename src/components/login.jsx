import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import axios from "axios";

const LoginForm = () => {
//   const { register, handleSubmit, errors } = useForm();
//   const [loginError, setLoginError] = useState(false);

//   const onSubmit = (data) => {
//     axios
//      .post("http://localhost:3001/api/v1/auth/login", data)
//      .then((res) => {
//         console.log(res);
//       })
//      .catch((err) => {
//         console.log(err);
//         setLoginError(true);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-xs italic">Please provide a valid email.</p>
//         )}
//       </div>
//       <div className="mb-6">
//         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           ref={register({ required: true })}
//           className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//         />
//         {errors.password && (
//           <p className="text-red-500 text-xs italic">Please provide a password.</p>
//         )}
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Login
//         </button>
//         <button
//           type="button"
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Forgot Password?
//         </button>
//       </div>
//       {loginError && (
//         <p className="text-red-500 text-center mt-4">Login failed. Please try again.</p>
//       )}
//     </form>
//   );
return (
    <div>
        <h1>Hello</h1>
    </div>
)
};

export default LoginForm;