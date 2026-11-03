
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold">
          <span className="text-orange-500">Academic</span>{" "}
          <span className="text-pink-600">Uploader</span>
        </h1>

        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-800">
          Welcome Back!
        </h2>

        <p className="mt-2 text-center text-gray-500">
          Login to your account
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 py-3 font-semibold text-white hover:opacity-90"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-pink-600">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
