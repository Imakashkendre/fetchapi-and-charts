import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import ApiStore from './Components/ApiStore/ApiStore';
import ProdDetails from './Components/ProdDetails/ProdDetails';
import Chart from './Components/Chart/Chart';

function App() {
  return (
    <div className="App">

      {/* <Routes>
        <Route path="/" element={<ApiStore />} />
        <Route path="/ProdDetails" element={<ProdDetails />} />
      </Routes> */}
      <Chart />

    </div>
  );
}

export default App;
