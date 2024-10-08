import './App.scss';
import { EventDataProvider } from './hooks/useEventData';
import Home from './view/Home';

function App() {
  return (
    <div className="App">
      <EventDataProvider>
        <Home />
      </EventDataProvider>
    </div>
  );
}

export default App;
