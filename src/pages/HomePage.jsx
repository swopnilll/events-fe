import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useToaster } from "../contexts/ToasterContext/useToaster";

import Filter from "../features/Events/components/Filter";
import EventCard from "../features/Events/components/EventCard";
import SearchInput from "../features/Events/components/SearchInput";

import { formatDate } from "../utils/utils";
import { getEvents } from "../services/apis/events";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  const [filteredEvents, setFilteredEvents] = useState([]);

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const { showToast } = useToaster();

  const fallbackImageUrl = "/images/events/event1.svg";

  const fetchEvents = async () => {
    try {
      const eventsData = await getEvents();

      setEvents(eventsData); // Set events data

      setFilteredEvents(eventsData);
    } catch (error) {
      showToast(error.message || "Failed to load events", "error"); // Show error toast
    }
  };

  const navigateToCreateEvent = () => {
    navigate("/create-event");
  };

  const applyTextSearchFilter = (event) => {
    console.log(event.target.value);

    setSearchText(event.target.value);

    let tempFilteredEvents = events.filter((ev) =>
      ev?.title?.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredEvents(tempFilteredEvents);
  };

  const clearTextSearchFilter = () => {
    setFilteredEvents(events);

    setSearchText("");
  };

  // TODO: Replace it
  const applyCapsuleFilter = (event, filterBy, filterName) => {
    console.log({ filterBy, filterName });

    let today = new Date();
    let tempFilteredEvents = [...events];

    let tomorrow = new Date();

    let weekendDays = [6, 0]; // Saturday (6) and Sunday (0)

    if (filterBy === "Date") {
      switch (filterName) {
        case "Today":
          tempFilteredEvents = tempFilteredEvents.filter(
            (ev) =>
              new Date(ev.start_date).toDateString() === today.toDateString()
          );
          break;

        case "Tomorrow":
          tomorrow.setDate(today.getDate() + 1);
          tempFilteredEvents = tempFilteredEvents.filter(
            (ev) =>
              new Date(ev.start_date).toDateString() === tomorrow.toDateString()
          );
          break;

        // TODO: Fix this
        case "This Weekend":
          tempFilteredEvents = tempFilteredEvents.filter((ev) =>
            weekendDays.includes(new Date(ev.start_date).getDay())
          );
          break;

        case "Free":
          tempFilteredEvents = tempFilteredEvents.filter((ev) => !ev.isPaid);
          break;

        default:
          tempFilteredEvents = events;
      }
    }

    setFilteredEvents(tempFilteredEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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
            <SearchInput
              value={searchText}
              setValue={applyTextSearchFilter}
              clearValue={clearTextSearchFilter}
            />
          </div>
        </div>

        {/* List */}
        <section className="w-full flex justify-center md:mt-6 px-4">
          <div className="w-full md:w-3/4 max-w-screen-xl">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold  text-gray-800 mb-6">
              Popular Events
            </h2>
            <div className="w-full bg-white p-4 md:flex md:flex-col space-y-8">
              {/* Date Filter - tag */}
              <Filter
                filterBy="Date"
                options={[
                  { name: "All", handler: applyCapsuleFilter },
                  { name: "Today", handler: applyCapsuleFilter },
                  { name: "Tomorrow", handler: applyCapsuleFilter },
                  { name: "This Weekend", handler: applyCapsuleFilter },
                  { name: "Free", handler: applyCapsuleFilter },
                ]}
                type="tag"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={index}
                  className="flex flex-col items-center text-center space-y-3"
                  image={event?.event_images[0]?.image_url || fallbackImageUrl}
                  title={event?.title}
                  date={formatDate(event?.start_date)}
                  location={event?.location}
                  isPriced={event?.isPaid == 1 ? true : false}
                  time="12 PM"
                  price={event.isPaid ? event?.price : 0}
                ></EventCard>
              ))}
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
              <span className="font-bold" onClick={navigateToCreateEvent}>
                Create Event
              </span>
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
