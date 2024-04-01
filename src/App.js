import logo from './logo.svg';
import './App.css';
import AddItems from './components/addItems/addItems';
import GetAllItems from './components/getAllItems/getAllItems';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    // <div >
    //  <AddItems/>
    // </div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<GetAllItems />} />
          <Route path="add" element={<AddItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
