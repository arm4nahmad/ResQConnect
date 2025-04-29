import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventCard from '../../components/EventCard';
import Alert from '../../components/Alert';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showLoginSuccess, setShowLoginSuccess] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: '1',
      title: 'NDRF Mock Drill Exercise',
      organization: 'NDRF',
      description: 'This is a community service programme organised by NDRF',
      location: 'Reliance Shopping Mall',
      date: '2025-07-15',
    },
    {
      id: '2',
      title: 'SDRF Mock Drill Exercise',
      organization: 'NDRF',
      description: 'This is a community service programme organised by NDRF',
      location: 'City Stadium',
      date: '2025-08-05',
    },
  ]);

  const [completedEvents, setCompletedEvents] = useState([
    {
      id: '3',
      title: 'SDRF Mock Drill Exercise',
      organization: 'NDRF',
      description: 'This is a community service programme organised by NDRF',
      location: 'City Stadium',
      date: '2025-11-05',
    },
    {
      id: '4',
      title: 'CAP Emergency Response Training',
      organization: 'NDRF',
      description: 'This is a community service programme organised by NDRF',
      location: 'Civic Center',
      date: '2025-10-08',
    },
    {
      id: '5',
      title: 'SSP Disaster Preparedness Drill',
      organization: 'NDRF',
      description: 'This is a community service programme organised by NDRF',
      location: 'Community Hall',
      date: '2025-06-20',
    },
    {
      id: '6',
      title: 'Fire Department Evacuation Exercise',
      organization: 'NDRF',
      description: 'This is a community service programme organised by NDRF',
      location: 'City Stadium',
      date: '2025-11-05',
    },
  ]);

  useEffect(() => {
    if (showLoginSuccess) {
      const timer = setTimeout(() => setShowLoginSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoginSuccess]);

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />

      {showLoginSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 right-4 z-50"
        >
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <Check className="text-green-600 w-5 h-5" />
            </div>
            <p className="text-gray-800">User Login Successful</p>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {upcomingEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              organization={event.organization}
              description={event.description}
              location={event.location}
              date={event.date}
              isUpcoming={true}
            />
          ))}
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Completed Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              organization={event.organization}
              description={event.description}
              location={event.location}
              date={event.date}
              isUpcoming={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;