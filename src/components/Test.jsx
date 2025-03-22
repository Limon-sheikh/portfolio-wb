import  { useState } from 'react';

const ObjectRender = () => {
  // Object তৈরি করা
  const [person] = useState({
    name: 'John Doe',
    age: 30,
    job: 'Web Developer',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Person Information</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Name: {person.name}</h3>
        <p className="text-lg">Age: {person.age}</p>
        <p className="text-lg">Job: {person.job}</p>
      </div>
    </div>
  );
};

export default ObjectRender;
