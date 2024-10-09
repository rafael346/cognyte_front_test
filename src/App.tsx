import { ToastContainer } from 'react-toastify';
import './App.scss';
import { EventDataProvider } from './hooks/useEventData';
import Home from './view/Home';

function App() {
  return (
    <div className="App">
      <EventDataProvider>
        <Home />
        <ToastContainer />
      </EventDataProvider>
    </div>
  );
}

export default App;
