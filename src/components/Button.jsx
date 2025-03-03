import { useState } from "react";
import PropTypes from "prop-types";

const Button = ({title, bgColor, border, icon}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [bgColor, setBgColor] = useState("bg-orange-500");

    // mouse move and leave start
    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;

        // mouse position and movement speed set
        const moveX = (offsetX / clientWidth - 0.5) * 30;
        const moveY = (offsetY / clientHeight - 0.5) * 30; 
        setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };
    // end 

    // Props validation and default value ser start
    Button.propTypes = {
        title: PropTypes.string.isRequired, // title obosshoi string hote hobe
        bgColor: PropTypes.string.isRequired, // bgColor obosshoi string hote hobe (Tailwind CSS class)
        border: PropTypes.bool,
        icon: PropTypes.node,
    };

    Button.defaultProps = {
        border: true,
        icon: null, 
      };
    // end   
      

    return (
        <button onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            className={`text-gray-800 px-6 py-4 rounded-xl capitalize font-bold text-lg transition-all duration-150 ease-linear
                flex
                ${bgColor} ${border ? 'border border-gray-800' : ''} `}
            style={{transform: `translate(${position.x}px, ${position.y}px)`}}> 
            {title} 
            {icon && <span className="ml-1 font-bold text-[25px]">{icon}</span>}
        </button>
    );
};

export default Button;
