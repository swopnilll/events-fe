import { useAuth } from "../contexts/AuthContext/useAuth"; // Import the useAuth hook
import SearchInput from "../features/Events/components/SearchInput";

const HomePage = () => {
  const { loading, isAuthenticated } = useAuth();

  console.log({ loading, isAuthenticated });

  return (
    <>
      <main>
        <div className="relative w-full md:h-[300px] bg-[#353345] p-6 flex flex-col justify-center items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/Hero.jpeg')",
            }}
          ></div>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Overlay Content */}
          <div className="relative w-full md:w-1/2 text-left z-10">
            <p className="text-xl lg:text-3xl text-white">Do not miss out!</p>
            <p className="text-xl lg:text-3xl text-white">
              Explore the{" "}
              <strong className="text-yellow-400">vibrant events</strong>{" "}
              happening locally and globally.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-1/2 mt-5 z-10">
            <SearchInput />
          </div>
        </div>

        {/* <!-- Create Event Banner --> */}
        <section
          className="w-full bg-cover bg-no-repeat bg-right md:bg-left py-10 px-6 bg-[#2B293D] text-[#ffe047]"
          style={{
            backgroundImage: "url('/assets/images/create-event-banner.svg')",
          }}
        >
          <div className="text-center">
            <h4 className="text-lg font-bold">Create an event with Eventify</h4>
            <p className="text-sm font-light">
              Got a show, event, activity or a great experience? Partner with us
              & get listed on Eventify
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button className="flex items-center bg-[#ffe047] text-black py-2 px-6 rounded-lg">
              {/* <img
                src="assets/images/create-event-button.svg"
                alt=""
                class="h-6 mr-2"
              /> */}
              <span className="font-bold">Create Event</span>
            </button>
          </div>
        </section>

        {/* <!-- Newsletter Section --> */}
        <section className="w-full bg-[#ffe047] flex flex-col items-center py-9 px-6">
          <div className="text-center mb-4">
            <h3 className="text-lg text-[#2d2c3c] font-bold">
              Subscribe to our Newsletter
            </h3>
            <p className="text-sm text-[#2d2c3ce7] font-light">
              Receive our weekly newsletter & updates with new events from your
              favourite organizers & venues.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="email"
              className="w-64 p-3 rounded-md outline-none border-gray-300"
              placeholder="Enter your e-mail address"
            />
            <button className="bg-[#2b293d] text-[#ffe047] px-6 py-3 rounded-md">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
