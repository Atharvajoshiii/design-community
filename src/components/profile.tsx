import React from 'react';

const MeetVikas: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-900 text-white rounded-lg shadow-lg h-screen">
      {/* Description on the left side */}
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl font-bold mb-2">Meet Vikas</h1>
        <p className="text-lg">
          Vikas is a seasoned software engineer with over 10 years of experience in the industry.
          He specializes in building scalable web applications and has a deep understanding of
          modern technologies like React, Node.js, and cloud computing. Vikas is passionate
          about open source and has contributed to several high-profile projects.
        </p>
      </div>

      {/* Profile picture on the right side */}
      <div className="md:w-1/3 mt-4 md:mt-0 md:ml-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Vikas"
          className="rounded-full w-32 h-32 object-cover border-4 border-gray-700 shadow-lg"
        />
      </div>
    </div>
  );
};

export default MeetVikas;
