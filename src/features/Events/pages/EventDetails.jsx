import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ArrowLeft, Calendar, Ticket, Navigation } from "lucide-react";

const mockEventData = {
	image: "/public/images/events/event1-large.svg", // Image URL
	title: "Coldplay Concert", // Event Title
	date: "Saturday, 2 December 2023", // Event Date
	time: "6:30 PM", // Event Time
	isPriced: true, // Whether the event has a ticket price
	price: 500, // Price of the ticket (in USD)
	location: "100/97 Opera House, Sydney, NSW", // Event Location
	description: `
	  Get ready to kick off the Christmas season in Mumbai with SOUND OF 
	  CHRISTMAS - your favourite LIVE Christmas concert! City Youth 
	  Movement invites you to the 4th edition of our annual Christmas 
	  festivities - by the youth and for the youth! Featuring your favourite 
	  worship leaders, carols, quizzes and some exciting surprises! 
	  Bring your family and friends and sing along your favourite Christmas 
	  carols on the 2nd of December, 6:30 PM onwards at the Balgandharva 
	  Rang Mandir, Bandra West. Book your tickets now!
	  
	  3 Reasons to attend the event:
	  1. The FIRST Christmas concert of Mumbai!
	  2. A special Christmas Choir!
	  3. Special Dance performances and many more surprises!
	`, // Event Description
};

const EventDetails = () => {
	const { eventId } = useParams();

	const [eventData, setEventData] = useState(null);

	const [loading, setLoading] = useState(true);

	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchEventDetails = () => {
			try {
				setLoading(true);

				setEventData(mockEventData); // Set the fetched data into state
			} catch (err) {
				setError(err.message); // Handle error
			} finally {
				setLoading(false); // Set loading to false when the request finishes
			}
		};

		fetchEventDetails();
	}, [eventId]);

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Error: {error}</div>;

	return (
		<div className="w-full p-4 md:max-w-[1920px] md:w-[90%] md:mx-auto relative">
			<div className="flex flex-col">
				{/* Event Image */}
				<img
					className="rounded-lg w-full h-auto max-h-[400px] object-cover"
					src={eventData.image}
					alt="Event Image"
				/>

				{/* Event Information */}
				<div className="text-gray-800 mt-6 bg-white rounded-lg shadow-lg p-6">
					{/* Event Title */}
					<p className="text-2xl md:text-3xl font-bold mb-4">
						{eventData.title}
					</p>

					{/* Date/Time and Buy Ticket CTA */}
					<div className="flex flex-col md:flex-row justify-between mb-6">
						{/* Date and Time */}
						<div className="flex flex-col gap-2 mb-6">
							<p className="text-md font-bold text-black">Date and Time</p>
							<div className="flex items-center gap-2">
								<Calendar className="w-5 h-5 text-gray-600" />
								<span className="text-base font-medium">
									{eventData.date}, {eventData.time}
								</span>
							</div>
						</div>

						{/* Buy Ticket and Ticket Information */}
						<div className="flex flex-col gap-4">
							{eventData.isPriced && (
								<button className="w-fit flex items-center gap-2 bg-[#ffe047d8] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#FFE047] transition">
									<Ticket className="w-5 h-5 text-black" />
									<span>Buy Tickets</span>
								</button>
							)}

							<div className="mt-2">
								<p className="font-bold text-md text-gray-800">
									Ticket Information
								</p>
								{eventData.isPriced ? (
									<div className="flex items-center gap-2 mt-1">
										<Ticket className="w-5 h-5 text-gray-600" />
										<div className="text-base text-gray-700">
											<span>Standard Ticket:</span>{" "}
											<span className="font-medium">
												${eventData.price} Each
											</span>
										</div>
									</div>
								) : (
									<p className="text-gray-700">
										Tickets are free for this event.
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Location */}
					<div className="flex flex-col gap-2">
						<p className="font-bold text-md">Location</p>
						<div className="flex gap-2">
							<Navigation className="w-5 h-5 text-gray-600" />
							<div>{eventData.location}</div>
						</div>
					</div>

					{/* Event Description */}
					<div className="bg-gray-100 p-4 rounded-lg shadow-md mt-10">
						<p className="font-bold text-md text-gray-800 mb-2">
							Event Description
						</p>
						<p className="text-gray-700 text-base leading-relaxed">
							{eventData.description}
						</p>
					</div>
				</div>
			</div>

			{/* Back Arrow */}
			<ArrowLeft className="hidden md:block w-8 h-8 text-black left-[-46px] top-8 absolute cursor-pointer" />
		</div>
	);
};

export default EventDetails;
