import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import './App.css';

function App() {

  const routes = useRoutes();  
 
  return (
    <div className="App">
      <BrowserRouter>
      {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
