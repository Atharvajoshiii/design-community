import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="text-center">
    <h3 className="text-white text-6xl font-semibold">{value}</h3>
    <p className="text-gray-400">{label}</p>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <StatCard value="35 +" label="Successfull Batches Delivered" />
        <StatCard value="5000 +" label="Job Placements" />
        <StatCard value="1000 +" label="Candidates with 25+ LPA Job" />
        
      </div>
    </div>
  );
};

export default StatsSection;
