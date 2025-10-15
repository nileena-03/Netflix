import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Trends from "./components/Trends";
import banner from "./components/images/banner.jpg";
import Signin from "./components/Signin"; // import your sign-in page

const App = () => {
  const [email, setEmail] = useState("");

  return (
    <Routes>
      {/* Main landing page */}
      <Route
        path="/"
        element={
          <div className="bg-black text-white min-h-screen">
            <Nav />

            <div
              className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

              <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-bold mb-4">
                  Unlimited films, series and more
                </h1>
                <p className="text-lg text-gray-300 mb-4">
                  Starts at NOK 99. Cancel anytime.
                </p>
                <p className="mb-6">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>

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

            <Trends />
          </div>
        }
      />

      {/* SignIn page */}
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default App;
