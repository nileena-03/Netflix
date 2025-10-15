import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary fake auth check
    if (email && password) {
      console.log("Signed in:", { email, password });
      navigate("/"); // goes back to your App.jsx landing page
    } else {
      alert("Please enter email and password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-full max-w-sm shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          Sign in
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-red-600"
        />

        <button
          type="submit"
          className="w-full bg-red-600 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Sign in
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          New to Netflix?{" "}
          <a href="/" className="text-red-500 hover:underline">
            Sign up now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
