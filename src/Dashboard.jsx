import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faFileAlt, faCog, faBars } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeNav, setActiveNav] = useState('Overview');

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navItems = [
    { icon: faHome, text: 'Overview' },
    { icon: faChartBar, text: 'Analytics' },
    { icon: faFileAlt, text: 'Reports' },
    { icon: faCog, text: 'Settings' },
  ];

  const renderContent = () => {
    switch(activeNav) {
      case 'Overview':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Total Users</h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Revenue</h3>
                <p className="text-3xl font-bold text-blue-600">$56,789</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Active Projects</h3>
                <p className="text-3xl font-bold text-blue-600">23</p>
              </div>
            </div>
          </div>
        );
      case 'Analytics':
        return <h2 className="text-3xl font-bold mb-6 text-gray-800">Analytics Content</h2>;
      case 'Reports':
        return <h2 className="text-3xl font-bold mb-6 text-gray-800">Reports Content</h2>;
      case 'Settings':
        return <h2 className="text-3xl font-bold mb-6 text-gray-800">Settings Content</h2>;
      default:
        return <h2 className="text-3xl font-bold mb-6 text-gray-800">Select a nav item</h2>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-900 text-white transition-all duration-300 ${isExpanded ? 'w-48' : 'w-16'}`}>
        <div className="p-4 flex justify-between items-center">
          <h1 className={`text-2xl font-semibold ${isExpanded ? '' : 'hidden'}`}>
            ADBMS T<sup className="text-sm">2</sup>UI
          </h1>
          <button onClick={toggleSidebar} className="text-white hover:text-blue-200">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className="mt-4">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className={`flex items-center py-2 px-4 hover:bg-blue-800 transition duration-200 ${activeNav === item.text ? 'bg-blue-800' : ''}`}
              onClick={() => setActiveNav(item.text)}
            >
              <FontAwesomeIcon icon={item.icon} className={`${isExpanded ? 'mr-3' : 'mx-auto'}`} />
              <span className={isExpanded ? '' : 'hidden'}>{item.text}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <div className="flex-grow p-10 bg-gray-100">
          {renderContent()}
        </div>
        <footer className="text-center py-4 text-lg text-black">
          Powered by Analog Devices
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;