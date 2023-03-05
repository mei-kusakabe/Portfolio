import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconName } from "react-icons/fa";
import './App.css';
import { routes } from './components/Pages/Routes/Routes';

function App() {

  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
