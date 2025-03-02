

import { useState } from "react";

const InteractiveButton = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [bgColor, setBgColor] = useState("bg-orange-500");

    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;

        // মাউসের অবস্থান অনুযায়ী মুভমেন্ট স্পিড বাড়ানো
        const moveX = (offsetX / clientWidth - 0.5) * 30; // 10 থেকে 30 করা হয়েছে
        const moveY = (offsetY / clientHeight - 0.5) * 30; 
        setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-2xl capitalize
                        font-bold text-lg transition-all duration-150 ease-linear `}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
           contact us
        </button>
    );
};

export default InteractiveButton;
