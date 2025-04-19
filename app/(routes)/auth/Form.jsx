"use client";

import { signup, login } from "@/app/(routes)/auth/actions";
import { useActionState, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Form() {
  //auth state
  const [signupState, signupAction, signupPending] = useActionState(
    signup,
    null,
  );
  const [loginState, loginAction, loginPending] = useActionState(login, null);

  //Signin input state
  const [signinEmailState, setSigninEmailState] = useState(""); //email
  const [signinPasswordState, setSigninPasswordState] = useState("");  //password

  //Signup input state
  const [usernameState, setUsernameState] = useState(""); //username
  const [signupEmailState, setSignupEmailState] = useState(""); //email
  const [signupPasswordState, setSignupPasswordState] = useState(""); //password

  //password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Tabs
      defaultValue="login"
      className="mx-auto my-10 w-full max-w-screen-xl gap-[48px] rounded-lg py-[20px] sm:px-12 sm:shadow-2xl md:mt-10 md:w-4/5 md:gap-6 md:py-10 lg:h-auto lg:w-1/2 lg:py-2"
    >
      <TabsContent value="login">
        <h1 className="-mt-3 mb-6 text-center text-2xl text-gray-800 md:mt-5 lg:mb-10">
          Welcome back!
        </h1>
        <form action={loginAction} id="loginForm">
          <div className="my-5 flex flex-col items-center gap-4 md:gap-2">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={signinEmailState}
              onChange={(e) => setSigninEmailState(e.target.value)}
              className="block h-14 w-full appearance-none rounded-md border-2 border-gray-400 px-4 py-4 text-lg text-gray-900 outline-none placeholder:text-lg placeholder:text-gray-400 focus:border-light focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            />

            {loginState?.errors?.email && (
              <ul className="block h-14 w-full list-inside list-disc px-4 pb-3 text-red-500 sm:text-sm sm:leading-6 md:w-3/4">
                {loginState?.errors?.email.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <div className="relative block h-14 w-full appearance-none rounded-md border-2 border-gray-400 bg-white px-4 py-4 text-lg text-gray-900 outline-none placeholder:text-lg placeholder:text-gray-400 focus:border-light focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={signinPasswordState}
                onChange={(e) => setSigninPasswordState(e.target.value)}
                className="border-none outline-none"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {loginState?.errors?.password && (
              <ul className="block h-14 w-full list-inside list-disc px-4 pb-3 text-red-500 sm:text-sm sm:leading-6 md:mb-4 md:w-3/4">
                {loginState?.errors?.password.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}

            <button
              name="submit"
              form="loginForm"
              disabled={loginPending}
              type="submit"
              className="my-10 block h-14 w-full rounded-md border-2 bg-pink-200 px-4 py-4 text-lg text-light outline-none focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4 lg:mt-5"
            >
              {loginPending ? "Submitting..." : "Login"}
            </button>

            <div className="mx-auto h-[19px] w-[320px] bg-[url('/desktopHorizontalOR.svg')] bg-no-repeat"></div>
            <button
              name="google"
              id="google"
              type="submit"
              formAction={process.env.BACKEND_BASE_URL + "/api/connect/google"}
              className="h-14 w-full rounded-md border-2 border-gray-400 bg-light px-4 py-4 text-lg text-black-100 outline-none focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            >
              <span className="relative text-gray-700">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 top-0 inline h-10 w-10 md:-left-10 md:-top-1/4"
                >
                  <path
                    d="M23.7217 12.2657C23.7217 11.2818 23.6419 10.5639 23.4691 9.81934H12.2346V14.26H18.829C18.6961 15.3636 17.9782 17.0256 16.3827 18.1423L16.3603 18.291L19.9125 21.0429L20.1586 21.0674C22.4187 18.98 23.7217 15.9087 23.7217 12.2657Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2346 23.9661C15.4653 23.9661 18.1775 22.9024 20.1585 21.0677L16.3827 18.1426C15.3722 18.8473 14.0161 19.3392 12.2346 19.3392C9.07032 19.3392 6.3847 17.2518 5.42736 14.3667L5.28703 14.3786L1.59347 17.2372L1.54517 17.3715C3.51284 21.2804 7.5546 23.9661 12.2346 23.9661Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.4273 14.3662C5.1747 13.6216 5.0285 12.8238 5.0285 11.9995C5.0285 11.1751 5.1747 10.3774 5.41401 9.63288L5.40732 9.47431L1.66747 6.56982L1.54511 6.62803C0.734137 8.25012 0.268799 10.0717 0.268799 11.9995C0.268799 13.9274 0.734137 15.7488 1.54511 17.3709L5.4273 14.3662Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2346 4.66054C14.4814 4.66054 15.9971 5.63112 16.8613 6.44221L20.2383 3.14487C18.1643 1.21701 15.4653 0.0336914 12.2346 0.0336914C7.5546 0.0336914 3.51284 2.71939 1.54517 6.62828L5.41407 9.63313C6.3847 6.74798 9.07032 4.66054 12.2346 4.66054Z"
                    fill="#EB4335"
                  />
                </svg>
                Continue with Google
              </span>
            </button>
            <button
              name="apple"
              id="apple"
              type="submit"
              className="h-14 w-full rounded-md border-2 border-gray-400 bg-light px-4 py-4 text-lg text-black-100 outline-none focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            >
              <span className="relative text-gray-700">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 top-0 inline h-10 w-10 md:-left-10 md:-top-1/4"
                >
                  <path
                    d="M21.7186 18.7034C21.3557 19.5419 20.926 20.3137 20.4282 21.0234C19.7497 21.9908 19.1942 22.6604 18.766 23.0323C18.1023 23.6426 17.3912 23.9552 16.6297 23.973C16.0831 23.973 15.4238 23.8174 14.6564 23.5019C13.8865 23.1878 13.1789 23.0323 12.532 23.0323C11.8534 23.0323 11.1257 23.1878 10.3474 23.5019C9.5678 23.8174 8.9398 23.9819 8.45966 23.9982C7.72943 24.0293 7.00158 23.7078 6.27506 23.0323C5.81136 22.6278 5.23136 21.9345 4.53654 20.9523C3.79106 19.9034 3.17817 18.6871 2.69803 17.3004C2.1838 15.8026 1.92603 14.3523 1.92603 12.9481C1.92603 11.3397 2.27358 9.9524 2.96973 8.78988C3.51684 7.8561 4.24469 7.11951 5.15565 6.57877C6.06662 6.03803 7.05091 5.76247 8.11091 5.74484C8.69091 5.74484 9.45151 5.92425 10.3967 6.27685C11.3392 6.63062 11.9444 6.81003 12.2097 6.81003C12.4081 6.81003 13.0804 6.60025 14.2201 6.18203C15.2979 5.79418 16.2075 5.63359 16.9527 5.69685C18.972 5.85981 20.489 6.65581 21.4979 8.08988C19.692 9.1841 18.7986 10.7167 18.8164 12.6828C18.8327 14.2142 19.3882 15.4885 20.4801 16.5004C20.9749 16.97 21.5275 17.333 22.1423 17.5908C22.009 17.9774 21.8682 18.3478 21.7186 18.7034ZM17.0875 0.47966C17.0875 1.67997 16.649 2.8007 15.7749 3.83803C14.7201 5.07122 13.4442 5.78381 12.0607 5.67136C12.0431 5.52736 12.0328 5.37581 12.0328 5.21655C12.0328 4.06425 12.5345 2.83107 13.4253 1.82277C13.87 1.31225 14.4357 0.887764 15.1216 0.549141C15.806 0.215571 16.4534 0.0310969 17.0623 -0.000488281C17.0801 0.159971 17.0875 0.32046 17.0875 0.47966Z"
                    fill="url(#paint0_linear_376_6931)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_376_6931"
                      x1="10.5637"
                      y1="15.4938"
                      x2="10.496"
                      y2="-4.20793"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                Continue with Apple
              </span>
            </button>
          </div>
        </form>
        <TabsList>
          <TabsTrigger value="signup">
            <p className="mx-auto my-4 text-center text-sm text-gray-800">
              New to AskFAY?{" "}
              <span className="text-pink-300 underline">Create an account</span>
            </p>
          </TabsTrigger>
        </TabsList>
      </TabsContent>
      <TabsContent value="signup">
        <h1 className="-mt-3 mb-6 text-center text-2xl text-gray-800 md:mt-5 lg:mb-10">
          Welcome!
        </h1>
        <form action={signupAction} id="signupForm">
          <div className="my-5 flex flex-col items-center gap-4 md:gap-2">
            <input
              name="username"
              placeholder="Username"
              value={usernameState}
              onChange={(e) => setUsernameState(e.target.value)}
              className="block h-14 w-full appearance-none rounded-md border-2 border-gray-400 px-4 py-4 text-lg text-gray-900 outline-none placeholder:text-lg placeholder:text-gray-400 focus:border-light focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            />

            {signupState?.errors?.username && (
              <ul className="block h-14 w-full list-inside list-disc px-4 pb-3 text-red-500 sm:text-sm sm:leading-6 md:w-3/4">
                {signupState?.errors?.username.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={signupEmailState}
              onChange={(e) => setSignupEmailState(e.target.value)}
              className="block h-14 w-full appearance-none rounded-md border-2 border-gray-400 px-4 py-4 text-lg text-gray-900 outline-none placeholder:text-lg placeholder:text-gray-400 focus:border-light focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            />

            {signupState?.errors?.email && (
              <ul className="block h-14 w-full list-inside list-disc px-4 pb-3 text-red-500 sm:text-sm sm:leading-6 md:w-3/4">
                {signupState?.errors?.email.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={signupPasswordState}
              onChange={(e) => setSignupPasswordState(e.target.value)}
              className="block h-14 w-full appearance-none rounded-md border-2 border-gray-400 px-4 py-4 text-lg text-gray-900 outline-none placeholder:text-lg placeholder:text-gray-400 focus:border-light focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            />
            {signupState?.errors?.password && (
              <ul className="block h-14 w-full list-inside list-disc px-4 pb-3 text-red-500 sm:text-sm sm:leading-6 md:mb-4 md:w-3/4">
                {signupState?.errors?.password.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}

            <button
              name="submit"
              form="signupForm"
              disabled={signupPending}
              type="submit"
              className="my-10 block h-14 w-full rounded-md border-2 bg-pink-200 px-4 py-4 text-lg text-light outline-none focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4 lg:mt-5"
            >
              {signupPending ? "Submitting..." : "Sign Up"}
            </button>

            <div className="mx-auto h-[19px] w-[320px] bg-[url('/desktopHorizontalOR.svg')] bg-no-repeat"></div>
            <button
              name="google"
              id="google"
              type="submit"
              className="h-14 w-full rounded-md border-2 border-gray-400 bg-light px-4 py-4 text-lg text-black-100 outline-none focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            >
              <span className="relative text-gray-700">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 top-0 inline h-10 w-10 md:-left-10 md:-top-1/4"
                >
                  <path
                    d="M23.7217 12.2657C23.7217 11.2818 23.6419 10.5639 23.4691 9.81934H12.2346V14.26H18.829C18.6961 15.3636 17.9782 17.0256 16.3827 18.1423L16.3603 18.291L19.9125 21.0429L20.1586 21.0674C22.4187 18.98 23.7217 15.9087 23.7217 12.2657Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2346 23.9661C15.4653 23.9661 18.1775 22.9024 20.1585 21.0677L16.3827 18.1426C15.3722 18.8473 14.0161 19.3392 12.2346 19.3392C9.07032 19.3392 6.3847 17.2518 5.42736 14.3667L5.28703 14.3786L1.59347 17.2372L1.54517 17.3715C3.51284 21.2804 7.5546 23.9661 12.2346 23.9661Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.4273 14.3662C5.1747 13.6216 5.0285 12.8238 5.0285 11.9995C5.0285 11.1751 5.1747 10.3774 5.41401 9.63288L5.40732 9.47431L1.66747 6.56982L1.54511 6.62803C0.734137 8.25012 0.268799 10.0717 0.268799 11.9995C0.268799 13.9274 0.734137 15.7488 1.54511 17.3709L5.4273 14.3662Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2346 4.66054C14.4814 4.66054 15.9971 5.63112 16.8613 6.44221L20.2383 3.14487C18.1643 1.21701 15.4653 0.0336914 12.2346 0.0336914C7.5546 0.0336914 3.51284 2.71939 1.54517 6.62828L5.41407 9.63313C6.3847 6.74798 9.07032 4.66054 12.2346 4.66054Z"
                    fill="#EB4335"
                  />
                </svg>
                Continue with Google
              </span>
            </button>
            <button
              name="apple"
              id="apple"
              type="submit"
              className="h-14 w-full rounded-md border-2 border-gray-400 bg-light px-4 py-4 text-lg text-black-100 outline-none focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 md:w-3/4"
            >
              <span className="relative text-gray-700">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 top-0 inline h-10 w-10 md:-left-10 md:-top-1/4"
                >
                  <path
                    d="M21.7186 18.7034C21.3557 19.5419 20.926 20.3137 20.4282 21.0234C19.7497 21.9908 19.1942 22.6604 18.766 23.0323C18.1023 23.6426 17.3912 23.9552 16.6297 23.973C16.0831 23.973 15.4238 23.8174 14.6564 23.5019C13.8865 23.1878 13.1789 23.0323 12.532 23.0323C11.8534 23.0323 11.1257 23.1878 10.3474 23.5019C9.5678 23.8174 8.9398 23.9819 8.45966 23.9982C7.72943 24.0293 7.00158 23.7078 6.27506 23.0323C5.81136 22.6278 5.23136 21.9345 4.53654 20.9523C3.79106 19.9034 3.17817 18.6871 2.69803 17.3004C2.1838 15.8026 1.92603 14.3523 1.92603 12.9481C1.92603 11.3397 2.27358 9.9524 2.96973 8.78988C3.51684 7.8561 4.24469 7.11951 5.15565 6.57877C6.06662 6.03803 7.05091 5.76247 8.11091 5.74484C8.69091 5.74484 9.45151 5.92425 10.3967 6.27685C11.3392 6.63062 11.9444 6.81003 12.2097 6.81003C12.4081 6.81003 13.0804 6.60025 14.2201 6.18203C15.2979 5.79418 16.2075 5.63359 16.9527 5.69685C18.972 5.85981 20.489 6.65581 21.4979 8.08988C19.692 9.1841 18.7986 10.7167 18.8164 12.6828C18.8327 14.2142 19.3882 15.4885 20.4801 16.5004C20.9749 16.97 21.5275 17.333 22.1423 17.5908C22.009 17.9774 21.8682 18.3478 21.7186 18.7034ZM17.0875 0.47966C17.0875 1.67997 16.649 2.8007 15.7749 3.83803C14.7201 5.07122 13.4442 5.78381 12.0607 5.67136C12.0431 5.52736 12.0328 5.37581 12.0328 5.21655C12.0328 4.06425 12.5345 2.83107 13.4253 1.82277C13.87 1.31225 14.4357 0.887764 15.1216 0.549141C15.806 0.215571 16.4534 0.0310969 17.0623 -0.000488281C17.0801 0.159971 17.0875 0.32046 17.0875 0.47966Z"
                    fill="url(#paint0_linear_376_6931)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_376_6931"
                      x1="10.5637"
                      y1="15.4938"
                      x2="10.496"
                      y2="-4.20793"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                Continue with Apple
              </span>
            </button>
          </div>
        </form>
        <TabsList>
          <TabsTrigger value="login">
            <p className="mx-auto my-4 pb-4 text-center text-sm text-gray-800">
              Already have an account?{" "}
              <span className="text-pink-300 underline">Login</span>
            </p>
          </TabsTrigger>
        </TabsList>
      </TabsContent>
    </Tabs>
  );
}
