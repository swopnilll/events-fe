import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";

import EventCard from "../components/EventCard";

const EventList = () => {
	const applyFilter = (e, filterBy, optionName) => {
		console.log(
			`${
				e.target.checked ? "Applied" : "Removed"
			}: ${optionName} in ${filterBy}`
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
					<SearchInput />
				</div>
			</div>

			<div className="w-full bg-white p-6 flex">
				{/* Filer */}
				<div className="hidden w-1/4 bg-white p-4 md:flex md:flex-col space-y-8">
					{/* Price Filter */}
					<Filter
						filterBy="Price"
						options={[
							{ name: "Free", handler: applyFilter },
							{ name: "Paid", handler: applyFilter },
						]}
					/>

					{/* Category Filter */}
					<Filter
						filterBy="Category"
						options={[
							{ name: "Workshops", handler: applyFilter },
							{ name: "Seminars", handler: applyFilter },
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
				</div>
			</div>
		</div>
	);
};

export default EventList;
