import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Medicines from './pages/Medicines';
// import Cart from './pages/Cart';
// import OnlineConsultation from './pages/OnlineConsultation';
// import OfflineConsultation from './pages/OfflineConsultation';
// import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/medicines" element={<Medicines />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/consultation/online" element={<OnlineConsultation />} />
          <Route path="/consultation/offline" element={<OfflineConsultation />} />
          <Route path="/chatbot" element={<Chatbot />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
