import { RouterProvider } from 'react-router-dom';
import { IconName } from "react-icons/fa";
import './App.css';
import { routes } from './components/Pages/Routes/Routes';

function App() {

  return (
    <div data-theme="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
