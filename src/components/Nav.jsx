import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="px-10 py-5 bg-black text-white flex justify-between items-center fixed top-0 w-full z-50">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-4xl font-bold text-red-600 cursor-pointer"
      >
        NETFLIX
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <select className="border border-gray-500 bg-black text-white px-2 py-1 rounded">
          <option value="English">English</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Hindi">Hindi</option>
        </select>

        {/* Sign In Button */}
        <button
          onClick={() => navigate("/signin")}
          className="bg-red-600 px-4 py-2 rounded font-medium hover:bg-red-700 transition"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Nav;