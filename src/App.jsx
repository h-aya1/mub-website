import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Countries from './pages/countries/Countries';
import Jobs from './pages/jobs/Jobs';
import Contact from './pages/contact/Contact';
import FAQ from './pages/faq/FAQ';
import Register from './pages/register/Register';
import AuthChoice from './pages/auth/AuthChoice';
import Login from './pages/auth/Login';
import Track from './pages/track/Track';
import NotFound from './pages/not-found/NotFound';
import './styles/App.css';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/auth-choice" element={<AuthChoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/track" element={<Track />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
