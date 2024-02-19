// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import PersonalSite from './pages/PersonalSite';
// import Aestige from './pages/Aestige.jsx';
// import Stacked from './pages/Stacked.jsx';
// import {
//   BrowserRouter as Router,
//   createBrowserRouter,
//   RouterProvider,
//   Routes,
//   Route,
//   useLocation
// } from "react-router-dom";
// import { AnimatePresence } from 'framer-motion';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/AboutPersonalSite",
//     element: <PersonalSite/>,
//   },
//   {
//     path: "/AboutAestige",
//     element: <Aestige/>,
//   },
//   {
//     path: "/AboutStacked",
//     element: <Stacked/>,
//   },
// ]);




// const RootComponent = () => {
//   return (
//     <RouterProvider router={router}>
//       <MainContent />
//     </RouterProvider>
//   );
// };

// const MainContent = () => {
//   const location = useLocation(); // <--- This useLocation is nested within the RouterProvider

//   return (
//     <React.StrictMode>
//       <AnimatePresence  mode="out-in">
//         <Routes location={location}>
//           <Route path="/Home" element={<App />} />
//           <Route path="/AboutPersonalSite" element={<PersonalSite />} />
//           <Route path="/AboutAestige" element={<Aestige />} />
//           <Route path="/AboutStacked" element={<Stacked />} />

//         </Routes>
//       </AnimatePresence>
//     </React.StrictMode>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RootComponent />);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PersonalSite from './pages/PersonalSite';
import Aestige from './pages/Aestige.jsx';
import Stacked from './pages/Stacked.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const MainContent = () => {
  const location = useLocation();

  return (
    <React.StrictMode>
      <AnimatePresence mode='wait'>
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/AboutPersonalSite" element={<PersonalSite />} />
          <Route path="/AboutAestige" element={<Aestige />} />
          <Route path="/AboutStacked" element={<Stacked />} />
        </Routes>
      </AnimatePresence>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <MainContent />
  </Router>
);