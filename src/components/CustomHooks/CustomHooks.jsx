// import { useEffect, useState } from "react";

// const useCounterOnView = (targetRef, start, end, speed = 50) => {
//   const [count, setCount] = useState(start); // সংখ্যা ট্র্যাক করার জন্য State
//   const [isCounting, setIsCounting] = useState(false); // স্ক্রিনে এলে স্টার্ট হবে কিনা

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsCounting(true); // স্ক্রিনে এলে কাউন্ট শুরু হবে
//         }
//       },
//       { threshold: 0.5 } // ৫০% এলিমেন্ট স্ক্রিনে এলে কাজ করবে
//     );

//     if (targetRef.current) observer.observe(targetRef.current);

//     return () => {
//       if (targetRef.current) observer.unobserve(targetRef.current);
//     };
//   }, [targetRef]);

//   useEffect(() => {
//     if (!isCounting) return; // যদি স্ক্রিনে না আসে, তাহলে কিছু করবে না

//     let current = start;
//     const interval = setInterval(() => {
//       if (current < end) {
//         current += 1;
//         setCount(current);
//       } else {
//         clearInterval(interval); // শেষ হলে বন্ধ করবে
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [isCounting, start, end, speed]);

//   return count;
// };

// export default useCounterOnView;
