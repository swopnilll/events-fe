import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";
import EventCard from "../components/EventCard";

import { getEvents } from "../../../services/apis/events";

import { formatDate } from "../../../utils/utils";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    price: null, // 'Free' or 'Paid'
    date: null, // 'Today', 'Tomorrow', etc.
  });

  const navigate = useNavigate();

  const fallbackImageUrl = "/images/events/event1.svg";

  // Fetch events from the API
  const fetchEvents = async () => {
    try {
      const eventsData = await getEvents();

      setEvents(eventsData); // Set events data
      setFilteredEvents(eventsData);
    } catch (error) {
      console.log(error.message || "Failed to load events", "error"); // Show error toast
    } finally {
      console.log("");
    }
  };

  // Apply filters and search
  const applyFiltersAndSearch = () => {
    let filtered = [...events];

    // Apply search query
    if (searchQuery) {
      console.log("i am here");
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Apply price filter
    if (filters.price) {
      filtered = filtered.filter((event) =>
        filters.price === "Free" ? event.is_paid === 0 : event.is_paid === 1,
      );
    }

    setFilteredEvents(filtered);
  };

  // Handle filter changes
  const handleFilterChange = (filterBy, optionName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterBy.toLowerCase()]: optionName,
    }));
  };

  const navigateToEventDetailsPage = (event) => {
    console.log("navigate to event clicked");

    navigate(`/events/${event.id}`);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Update filtered events when filters, events, or debounced search query change
  useEffect(() => {
    applyFiltersAndSearch();
  }, [searchQuery, filters, events]);

  const applyFilter = (e, filterBy, optionName) => {
    console.log(
      `${
        e.target.checked ? "Applied" : "Removed"
      }: ${optionName} in ${filterBy}`,
    );
  };

  return (
    <div>
      {/* Search Box */}
      <div className="w-full md:h-[300px] bg-[#353345] p-6 flex flex-col justify-center items-center">
        <p className="text-xl lg:text-5xl text-white">
          Explore a world of events. Find what excites you!
        </p>
        <div className="md:w-1/2 mt-5">
          <SearchInput query={searchQuery} setQuery={setSearchQuery} />
        </div>
      </div>

      <div className="w-full bg-white p-6 flex">
        {/* Filer */}
        <div className="hidden w-1/4 bg-white p-4 md:flex md:flex-col space-y-8">
          {/* Price Filter */}
          <Filter
            filterBy="Price"
            options={[
              {
                name: "Free",
                handler: () => handleFilterChange("price", "Free"),
              },
              {
                name: "Paid",
                handler: () => handleFilterChange("price", "Paid"),
              },
            ]}
          />

          {/* Date Filter */}
          <Filter
            filterBy="Date"
            options={[
              { name: "Today", handler: applyFilter },
              { name: "Tomorrow", handler: applyFilter },
              { name: "Next Week", handler: applyFilter },
              { name: "Next Month", handler: applyFilter },
            ]}
          />
        </div>

        {/* List */}
        <div className="w-full md:w-3/4 md:mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                onClick={() => navigateToEventDetailsPage(event)}
              ></EventCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
