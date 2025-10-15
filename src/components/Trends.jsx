import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "8c1d39066cf826d469536c8b37cb3c08"; // Your TMDB API key

const Trends = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        );
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  if (loading)
    return <p className="text-center py-10 text-white">Loading movies...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div className="w-full px-6 py-12 bg-black text-white relative">
      <h2 className="text-4xl font-bold mb-8 text-left">Trending Now</h2>

      {/* ---------- Movie Carousel ---------- */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight size={30} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="relative flex-shrink-0 w-48 sm:w-56 md:w-64 cursor-pointer group"
              onClick={() => setSelectedMovie(movie)}
            >
              {/* 🔴 Trending Number */}
              <span className="absolute top-2 left-2 text-red-600 font-extrabold text-3xl sm:text-4xl drop-shadow-md select-none">
                {index + 1}
              </span>

              {movie.poster_path ? (
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-72 bg-gray-800 flex items-center justify-center rounded-lg">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Movie Details Modal ---------- */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-2xl max-w-2xl text-white relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSelectedMovie(null)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="w-48 rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedMovie.title}
                </h2>
                <p className="text-gray-400 mb-2">
                  Release Date: {selectedMovie.release_date || "N/A"}
                </p>
                <p className="text-gray-400 mb-4">
                  Rating: ⭐ {selectedMovie.vote_average?.toFixed(1) || "N/A"}
                </p>
                <p className="text-sm mb-4">{selectedMovie.overview}</p>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- MORE REASONS TO JOIN ---------- */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-10 text-white text-center">
          More reasons to join
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Enjoy on your TV",
              text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            },
            {
              title: "Download your shows to watch offline",
              text: "Save your favourites easily and always have something to watch.",
            },
            {
              title: "Watch everywhere",
              text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            },
            {
              title: "Create profiles for kids",
              text: "Send kids on adventures with their favourite characters — free with your membership.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- FAQ SECTION ---------- */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-3">
          {[
            {
              q: "What is Netflix?",
              a: "Netflix is a streaming service offering a wide variety of award-winning TV shows, movies, anime, and more.",
            },
            {
              q: "How much does Netflix cost?",
              a: "Plans range from $6.99 to $19.99 a month, offering access on multiple devices.",
            },
            {
              q: "Where can I watch?",
              a: "Watch anywhere, anytime — on web, mobile, or smart TV using the Netflix app.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="bg-[#2a2a2a] text-white rounded-lg p-4 cursor-pointer"
            >
              <summary className="font-semibold text-lg flex justify-between items-center">
                {item.q}
                <span className="text-2xl font-light">+</span>
              </summary>
              <p className="mt-3 text-gray-400 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;

