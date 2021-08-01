import Routes from './Routes';
import './App.css';
import ListProvider from "./Context";

function App() {
  return (
    <ListProvider>
      <div className="App">
        <Routes />
      </div>
    </ListProvider>
  );
}

export default App;
