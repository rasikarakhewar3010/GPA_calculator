import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/MainComponets/Home';
import SgpaToCgpa from './components/MainComponets/SgpaToCgpa';
import CgpaCreditWise from './components/MainComponets/CgpaCreditWise';
import SgpaToPercentage from './components/MainComponets/SgpaToPercentage';
import MarksToSgpa from './components/MainComponets/MarksToSgpa';
import CseSemGPA from './components/MainComponets/CseSemGPA';
import ContactUs from './components/MainComponets/ContactUs';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/sgpatocgpa',
      element: <SgpaToCgpa />,
    },
    {
      path: '/cgpacreditwise',
      element: <CgpaCreditWise />,
    },
    {
      path: '/sgpatppercentage',
      element: <SgpaToPercentage />,
    },
    {
      path: '/markstosgpa',
      element: <MarksToSgpa />,
    },
    {
      path: '/csesgpa',
      element: <CseSemGPA />,
    },
    {
      path: '/contactus',
      element: <ContactUs />,
    },
    {
      path: '*', 
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
