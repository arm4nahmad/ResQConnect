import React from 'react';
import Navbar from '../../components/Navbar';
import { Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contacts = [
    {
      id: '1',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '2',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '3',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '4',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '5',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '6',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '7',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '8',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '9',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
    {
      id: '10',
      name: 'NATIONAL DISASTER RESPONSE FORCE',
      location: 'NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001',
      phone: '9123456780',
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Details
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.map((contact, index) => (
                  <tr key={contact.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <MapPin size={16} className="text-gray-500 mt-1 mr-1 flex-shrink-0" />
                        <div className="text-sm text-gray-900">{contact.location}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Phone size={16} className="text-gray-500 mr-1" />
                        <div className="text-sm text-gray-900">{contact.phone}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;