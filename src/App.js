import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
