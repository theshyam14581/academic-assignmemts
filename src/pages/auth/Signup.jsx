
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold">
          <span className="text-orange-500">Academic</span>{" "}
          <span className="text-pink-600">Uploader</span>
        </h1>

        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-800">
          Create Account
        </h2>

        <p className="mt-2 text-center text-gray-500">
          Register your student account
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 py-3 font-semibold text-white hover:opacity-90"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-pink-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
