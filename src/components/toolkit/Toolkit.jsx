import React from 'react';

export default function Toolkit() {
  return (
    <div className="flex flex-wrap pb-6 items-center justify-center space-x-2 space-y-2">
      {['HTML', 'CSS', 'JavaScript', 'React', 'MongoDb', 'NodeJs', 'Express', 'Postgresql'].map((item) => (
        <span
          key={item}
          className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >
          #{item}
        </span>
      ))}
    </div>
  );
}
