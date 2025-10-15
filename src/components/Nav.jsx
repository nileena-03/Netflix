import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="px-6 sm:px-10 py-4 bg-transparent text-white flex justify-between items-center fixed top-0 w-full z-50">
      {/* Logo Image */}
      <img
        src="/images/logo.png"
        alt="Logo"
        onClick={() => navigate("/")}
        className="w-24 sm:w-32 cursor-pointer object-contain select-none"
      />

      {/* Right Side Controls */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Language Selector */}
        <select
          className="border border-gray-500 bg-transparent text-white px-2 py-1 rounded text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-red-600 transition"
          defaultValue="English"
        >
          <option value="English" className="text-black">
            English
          </option>
          <option value="Malayalam" className="text-black">
            Malayalam
          </option>
          <option value="Hindi" className="text-black">
            Hindi
          </option>
        </select>

        {/* Sign In Button */}
        <button
          onClick={() => navigate("/signin")}
          className="bg-[#E50914] px-3 sm:px-5 py-1.5 sm:py-2 rounded font-semibold text-sm sm:text-base hover:bg-red-700 active:scale-95 transition-transform duration-150"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Nav;
