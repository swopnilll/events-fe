import PropTypes from "prop-types";
import { Ticket } from "lucide-react";

const EventCard = ({ image, title, date, location, isPriced, price, time }) => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg">
      <img className="rounded-t-lg w-full h-32" src={image} alt={title} />
      <div className="p-4">
        <p className="text-gray-800 font-semibold">{title}</p>
        <div className="text-gray-600 mt-2">
          <span>{date}</span> | <span>{location}</span>
          <div className="mt-1">{time}</div>
        </div>

        {isPriced ? (
          <p className="mt-2 text-gray-700 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-green-600" />
            <span className="font-bold text-green-600">${price}</span>
          </p>
        ) : (
          <div className="bg-[#FFE046] text-[10px] px-2 py-1 rounded-full w-fit mt-2">
            Free
          </div>
        )}
      </div>
    </div>
  );
};

// Prop types for type checking
EventCard.propTypes = {
  image: PropTypes.string.isRequired, // The image source URL (required)
  title: PropTypes.string.isRequired, // The title of the event (required)
  date: PropTypes.string.isRequired, // The date of the event (required)
  location: PropTypes.string.isRequired, // The location of the event (required)
  time: PropTypes.string.isRequired, // The time of the event (required)
  isPriced: PropTypes.bool.isRequired, // A flag to indicate if the event is priced (required)
  price: PropTypes.oneOfType([
    // The price of the event, can be a number or string
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // The price (required)
};

export default EventCard;
