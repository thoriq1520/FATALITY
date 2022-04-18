import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dasboard from './pages/Dashboard';
import { FitnProper, PendaftaranFit, PendaftaranWawancara, PenilaianFit, PenilaianWawancara } from './pages/FitnProper';
import Error from './Error';
import Report from './pages/Report';
import Pencarian from './pages/Pencarian';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact component={Dasboard} />
        <Route path='/FitnProper' exact component={FitnProper} />
        <Route path='/FitnProper/pendaftaran' exact component={PendaftaranFit} />
        <Route path='/FitnProper/wawancara' exact component={PendaftaranWawancara} />
        <Route path='/FitnProper/penilaianfit' exact component={PenilaianFit} />
        <Route path='/FitnProper/penilaianwawancara' exact component={PenilaianWawancara} />
        <Route path='/Report' exact component={Report} />
        <Route path='/pencarian' exact component={Pencarian} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
