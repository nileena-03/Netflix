import { useState } from "react";
import Nav from "./components/Nav";
import Trends from "./components/Trends";
import banner from "./components/images/banner.jpg";

const App = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-4">
            Unlimited films, series and more
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Starts at NOK 99. Cancel anytime.
          </p>
          <p className="mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Email input + Get Started button */}
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-2 mb-12">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
            />
            <button className="bg-red-600 px-6 py-2 rounded font-medium hover:bg-red-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Trending Movies */}
      <Trends />
    </div>
  );
};

export default App;
