
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";

const Card = ({title, details, icon}) => {

    // Props validation and default value ser start
        Card.propTypes = {
        title: PropTypes.string.isRequired, // title obosshoi string hote hobe
        details: PropTypes.string.isRequired, // bgColor obosshoi string hote hobe (Tailwind CSS class)
        icon: PropTypes.node,
    };

    return (
        <div className="  bg-green-600 rounded-xl grid gap-3 text-center place-items-center p-4 w-[300px] text-gray-800">
            <span className="text-6xl ">{icon}</span>
            <h2 className="capitalize text-2xl font-bold">{title}</h2>
            <p className="text-justify">{details}</p>
            <span className="text-3xl "><FaArrowRightLong /></span>
        </div>
    );
};

export default Card;