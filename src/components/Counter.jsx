import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Counter = ({endPoint, intervalSpeed}) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setCount(0); // Reset counter every time it's viewed
          setIsCounting(true);
        } else {
          setIsCounting(false);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isCounting) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + 1 >= endPoint) {
            clearInterval(intervalRef.current);
            return endPoint;
          }
          return prevCount + 1;
        });
      }, intervalSpeed); // `intervalSpeed` is dynamic
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isCounting, endPoint, intervalSpeed]);

  return (
    <div ref={counterRef}>
        {count}
    </div>
  );
};

// Prop validation
Counter.propTypes = {
  endPoint: PropTypes.number,
  intervalSpeed: PropTypes.number, // New prop to control speed
};

export default Counter;
