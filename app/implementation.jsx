import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const AuthComponent = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Register new user
        const response = await axios.post(
          "http://your-strapi-url/api/auth/local/register",
          {
            username: email,
            email,
            password,
          },
        );
        console.log("User registered successfully", response.data);
        // You might want to automatically log in the user here
      } else {
        // Login existing user
        const response = await axios.post(
          "http://your-strapi-url/api/auth/local",
          {
            identifier: email,
            password,
          },
        );
        console.log("User logged in successfully", response.data);
      }
      // Store the JWT token
      // localStorage.setItem('token', response.data.jwt);
      // Redirect to landing page
      router.push("/");
    } catch (error) {
      console.error(
        "Authentication error",
        error.response?.data || error.message,
      );
      // Handle error (show error message to user)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">
          {isSignup ? "Welcome!" : "Welcome back!"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded border p-2 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-purple-600 p-2 text-white hover:bg-purple-700"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-500">or</span>
        </div>
        <button className="mt-4 flex w-full items-center justify-center rounded border p-2">
          <img src="/google-icon.png" alt="Google" className="mr-2 h-5 w-5" />
          Continue with Google
        </button>
        <button className="mt-2 flex w-full items-center justify-center rounded border p-2">
          <img src="/apple-icon.png" alt="Apple" className="mr-2 h-5 w-5" />
          Continue with Apple
        </button>
        <p className="mt-4 text-center">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                className="text-purple-600 hover:underline"
                onClick={() => setIsSignup(false)}
              >
                Login
              </button>
            </>
          ) : (
            <>
              New to ASK Fay?{" "}
              <button
                className="text-purple-600 hover:underline"
                onClick={() => setIsSignup(true)}
              >
                Create an account
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthComponent;
