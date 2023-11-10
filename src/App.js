
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';

function App() {
  const savedMode = localStorage.getItem('darkMode'); //runs to see if theres a value im local storage because there never is on initial load it defaults to false
  const [isDarkMode, setDarkMode] = useState(savedMode ? JSON.parse(savedMode) : false); // so if true JSON.parse(savedMode) else set to false 
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => { // prev mode refrences the value of line 33 so = flase on initial load because local storage is empty
      const newMode = !prevMode; //opposite value of prevmode false = true - true = false 
      localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save the mode in localStorage
      return newMode;
    });
  };

  useEffect(() => {
    // Add an event listener to listen for changes in local storage made in other tabs/windows
    const storageListener = () => {
      const newMode = JSON.parse(localStorage.getItem('darkMode'));
      setDarkMode(newMode);
    };
    window.addEventListener('storage', storageListener);
    return () => window.removeEventListener('storage', storageListener);
  }, []);

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} setActiveFilter={setActiveFilter} activeFilter={activeFilter} />
      <Body toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </>
  );
}

export default App;
