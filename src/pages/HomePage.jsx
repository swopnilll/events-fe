import { useAuth } from "../contexts/AuthContext/useAuth"; // Import the useAuth hook
import SearchInput from "../features/Events/components/SearchInput";

import EventCard from "../features/Events/components/EventCard";
import Filter from "../features/Events/components/Filter";

const HomePage = () => {
  const { loading, isAuthenticated } = useAuth();

  const applyFilter = (e, filterBy, optionName) => {
    console.log(
      `${
        e.target.checked ? "Applied" : "Removed"
      }: ${optionName} in ${filterBy}`
    );
  };

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

<<<<<<< HEAD
        <section className="py-8 px-4 bg-white">
          <div className="max-w-screen-xl mx-auto ">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Explore Categories
            </h2>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Category Items */}
              {[
                { name: "Entertainment" },
                { name: "Educational & Business" },
                { name: "Cultural & Arts" },
                { name: "Sports & Fitness" },
                { name: "Technology & Innovation" },
                { name: "Travel & Adventure" },
              ].map((category, index) => (
                <div
=======
        {/* List */}
        <div className="w-full flex justify-center md:mt-6 px-4">
          <div className="w-full md:w-3/4 max-w-screen-xl">
            <div className="w-full bg-white p-4 md:flex md:flex-col space-y-8">
              {/* Date Filter - tag */}
              <Filter
                filterBy="Date"
                options={[
                  { name: "All", handler: applyFilter },
                  { name: "Today", handler: applyFilter },
                  { name: "Tomorrow", handler: applyFilter },
                  { name: "This Weekend", handler: applyFilter },
                  { name: "Free", handler: applyFilter },
                ]}
                type="tag"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventCard
>>>>>>> adadfd7 (feat/homepage Modified Filter - Tag option added)
                  key={index}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  {/* Circular Avatar with First Letter */}
                  <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center bg-yellow-700 text-white font-bold text-xl md:text-2xl lg:text-3xl shadow">
                    {category.name[0]} {/* Display the first letter */}
                  </div>
                  {/* Category Name */}
                  <p className="text-sm md:text-base font-medium text-gray-700">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold  text-gray-800 mb-6">
              Popular Events
            </h2>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <EventCard
                image="/images/events/event1.svg"
                title="Startup Talks - Innovative event for founders & Startup Enthusiasts of Delhi"
                date="Jan 25, 2025"
                location="Delhi"
                isPriced={true}
                time="4pm to 6pm"
                price="100"
              />
              <EventCard
                image="/images/events/event1.svg"
                title="Tech Innovators Meetup"
                date="Feb 15, 2025"
                location="Mumbai"
                isPriced={true}
                time="4pm to 6pm"
                price="200"
              />

              <EventCard
                image="/images/events/event1.svg"
                title="Startup Talks - Innovative event for founders & Startup Enthusiasts of Delhi"
                date="Jan 25, 2025"
                location="Delhi"
                isPriced={true}
                time="4pm to 6pm"
                price="100"
              />

              <EventCard
                image="/images/events/event1.svg"
                title="Tech Innovators Meetup"
                date="Feb 15, 2025"
                location="Mumbai"
                isPriced={true}
                time="4pm to 6pm"
                price="200"
              />

              <EventCard
                image="/images/events/event1.svg"
                title="Startup Talks - Innovative event for founders & Startup Enthusiasts of Delhi"
                date="Jan 25, 2025"
                location="Delhi"
                isPriced={true}
                time="4pm to 6pm"
                price="100"
              />

              <EventCard
                image="/images/events/event1.svg"
                title="Tech Innovators Meetup"
                date="Feb 15, 2025"
                location="Mumbai"
                isPriced={true}
                time="4pm to 6pm"
                price="200"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-[#FFE047] text-black px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                See More
              </button>
            </div>
          </div>
        </section>

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
