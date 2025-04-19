// "use client";

import Form from "@/app/(routes)/auth/Form";

const Signin = () => {
  return (
    // <div className="container mx-auto flex h-screen max-w-screen-xl flex-col items-center overflow-hidden px-4 ">
    <div className="col-start-1 col-end-13 h-screen pb-0 pl-2 pr-2 pt-2 lg:content-center">
      <Form />
    </div>
  );
};

export default Signin;

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";

// const AuthComponent = () => {
//   const [isSignup, setIsSignup] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isSignup) {
//         // Register new user
//         const response = await axios.post(
//           "http://your-strapi-url/api/auth/local/register",
//           {
//             username: email,
//             email,
//             password,
//           },
//         );
//         console.log("User registered successfully", response.data);
//         // You might want to automatically log in the user here
//       } else {
//         // Login existing user
//         const response = await axios.post(
//           "http://your-strapi-url/api/auth/local",
//           {
//             identifier: email,
//             password,
//           },
//         );
//         console.log("User logged in successfully", response.data);
//       }
//       // Store the JWT token
//       // localStorage.setItem('token', response.data.jwt);
//       // Redirect to landing page
//       router.push("/");
//     } catch (error) {
//       console.error(
//         "Authentication error",
//         error.response?.data || error.message,
//       );
//       // Handle error (show error message to user)
//     }
//   };

//   return (
//     <div className="col-start-1 col-end-13 flex h-screen min-h-screen items-center justify-center bg-gray-100 pb-0 pl-2 pr-2 pt-2 text-gray-800 lg:content-center">
//       <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
//         <h2 className="mb-6 text-center text-2xl">
//           {isSignup ? "Welcome!" : "Welcome back!"}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full rounded border border-gray-400 p-2 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-600"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="relative mb-6">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full rounded border border-gray-400 p-2 pr-10 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-600"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full rounded-md border-2 bg-pink-200 p-4 text-light"
//           >
//             {isSignup ? "Create Account" : "Login"}
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <span className="text-gray-500">or</span>
//         </div>
//         <button className="mt-4 w-full items-center justify-center rounded-md border-2 p-4">
//           <span className="relative text-gray-700">
//             <svg
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute -left-10 top-0 inline h-8 w-8 md:-left-10 md:-top-1/4"
//             >
//               <path
//                 d="M23.7217 12.2657C23.7217 11.2818 23.6419 10.5639 23.4691 9.81934H12.2346V14.26H18.829C18.6961 15.3636 17.9782 17.0256 16.3827 18.1423L16.3603 18.291L19.9125 21.0429L20.1586 21.0674C22.4187 18.98 23.7217 15.9087 23.7217 12.2657Z"
//                 fill="#4285F4"
//               />
//               <path
//                 d="M12.2346 23.9661C15.4653 23.9661 18.1775 22.9024 20.1585 21.0677L16.3827 18.1426C15.3722 18.8473 14.0161 19.3392 12.2346 19.3392C9.07032 19.3392 6.3847 17.2518 5.42736 14.3667L5.28703 14.3786L1.59347 17.2372L1.54517 17.3715C3.51284 21.2804 7.5546 23.9661 12.2346 23.9661Z"
//                 fill="#34A853"
//               />
//               <path
//                 d="M5.4273 14.3662C5.1747 13.6216 5.0285 12.8238 5.0285 11.9995C5.0285 11.1751 5.1747 10.3774 5.41401 9.63288L5.40732 9.47431L1.66747 6.56982L1.54511 6.62803C0.734137 8.25012 0.268799 10.0717 0.268799 11.9995C0.268799 13.9274 0.734137 15.7488 1.54511 17.3709L5.4273 14.3662Z"
//                 fill="#FBBC05"
//               />
//               <path
//                 d="M12.2346 4.66054C14.4814 4.66054 15.9971 5.63112 16.8613 6.44221L20.2383 3.14487C18.1643 1.21701 15.4653 0.0336914 12.2346 0.0336914C7.5546 0.0336914 3.51284 2.71939 1.54517 6.62828L5.41407 9.63313C6.3847 6.74798 9.07032 4.66054 12.2346 4.66054Z"
//                 fill="#EB4335"
//               />
//             </svg>
//             Continue with Google
//           </span>
//         </button>
//         <button className="mt-4 w-full items-center justify-center rounded-md border-2 p-4">
//           <span className="relative text-gray-700">
//             <svg
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute -left-10 top-0 inline h-8 w-8 md:-left-10 md:-top-1/4"
//             >
//               <path
//                 d="M21.7186 18.7034C21.3557 19.5419 20.926 20.3137 20.4282 21.0234C19.7497 21.9908 19.1942 22.6604 18.766 23.0323C18.1023 23.6426 17.3912 23.9552 16.6297 23.973C16.0831 23.973 15.4238 23.8174 14.6564 23.5019C13.8865 23.1878 13.1789 23.0323 12.532 23.0323C11.8534 23.0323 11.1257 23.1878 10.3474 23.5019C9.5678 23.8174 8.9398 23.9819 8.45966 23.9982C7.72943 24.0293 7.00158 23.7078 6.27506 23.0323C5.81136 22.6278 5.23136 21.9345 4.53654 20.9523C3.79106 19.9034 3.17817 18.6871 2.69803 17.3004C2.1838 15.8026 1.92603 14.3523 1.92603 12.9481C1.92603 11.3397 2.27358 9.9524 2.96973 8.78988C3.51684 7.8561 4.24469 7.11951 5.15565 6.57877C6.06662 6.03803 7.05091 5.76247 8.11091 5.74484C8.69091 5.74484 9.45151 5.92425 10.3967 6.27685C11.3392 6.63062 11.9444 6.81003 12.2097 6.81003C12.4081 6.81003 13.0804 6.60025 14.2201 6.18203C15.2979 5.79418 16.2075 5.63359 16.9527 5.69685C18.972 5.85981 20.489 6.65581 21.4979 8.08988C19.692 9.1841 18.7986 10.7167 18.8164 12.6828C18.8327 14.2142 19.3882 15.4885 20.4801 16.5004C20.9749 16.97 21.5275 17.333 22.1423 17.5908C22.009 17.9774 21.8682 18.3478 21.7186 18.7034ZM17.0875 0.47966C17.0875 1.67997 16.649 2.8007 15.7749 3.83803C14.7201 5.07122 13.4442 5.78381 12.0607 5.67136C12.0431 5.52736 12.0328 5.37581 12.0328 5.21655C12.0328 4.06425 12.5345 2.83107 13.4253 1.82277C13.87 1.31225 14.4357 0.887764 15.1216 0.549141C15.806 0.215571 16.4534 0.0310969 17.0623 -0.000488281C17.0801 0.159971 17.0875 0.32046 17.0875 0.47966Z"
//                 fill="url(#paint0_linear_376_6931)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_376_6931"
//                   x1="10.5637"
//                   y1="15.4938"
//                   x2="10.496"
//                   y2="-4.20793"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop />
//                   <stop offset="1" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             Continue with Apple
//           </span>
//         </button>
//         <p className="mx-auto my-4 pb-4 text-center text-sm text-gray-800">
//           {isSignup ? (
//             <>
//               Already have an account?{" "}
//               <button
//                 className="text-pink-300 underline"
//                 onClick={() => setIsSignup(false)}
//               >
//                 Login
//               </button>
//             </>
//           ) : (
//             <>
//               New to ASK Fay?{" "}
//               <button
//                 className="text-pink-300 underline"
//                 onClick={() => setIsSignup(true)}
//               >
//                 Create an account
//               </button>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;
