import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PersonalSite from './pages/PersonalSite';
import Aestige from './pages/Aestige.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/AboutPersonalSite",
    element: <PersonalSite/>,
  },
  {
    path: "/AboutAestige",
    element: <Aestige/>,
  },
]);




const RootComponent = () => {
  return (
    <RouterProvider router={router}>
      <MainContent />
    </RouterProvider>
  );
};

const MainContent = () => {
  const location = useLocation(); // <--- This useLocation is nested within the RouterProvider

  return (
    <React.StrictMode>
      <AnimatePresence  mode="out-in">
        <Routes location={location}>
          <Route path="/Home" element={<App />} />
          <Route path="/AboutPersonalSite" element={<PersonalSite />} />
          <Route path="/AboutAestige" element={<Aestige />} />
        </Routes>
      </AnimatePresence>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);