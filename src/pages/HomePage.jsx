import { useAuth } from "../contexts/AuthContext/useAuth"; // Import the useAuth hook
import SearchInput from "../features/Events/components/SearchInput";

const HomePage = () => {
  const { loading, isAuthenticated } = useAuth();

  console.log({ loading, isAuthenticated });

  return (
    <>
      <main>
        {/* Search Box */}
        <div className="relative w-full bg-[url('/images/Hero.jpeg')] bg-cover bg-center p-20 pt-30 flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-[#353345] opacity-70"></div>

          <div className="relative w-full md:w-1/2">
            <p className="text-lg lg:text-3xl font-bold text-white text-left">
              Don't miss out!
              <br /> Explore the{" "}
              <span className="text-[#FFE047]">vibrant events</span> happening
              locally and globally.
            </p>
            <div className="mt-10">
              <SearchInput />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
