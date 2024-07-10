import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
/**import DoctorDashboard from './pages/DoctorDashboard';
import PatientView from './pages/PatientView'; 
import Header from './components/Header'; */
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { IntlProvider } from 'react-intl';
import en from './locales/en.json';
import fr from './locales/fr.json';

const messages = {
  'en': en,
  'fr': fr
};

const App: React.FC = () => {
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider messages={messages[locale as keyof typeof messages]} locale={locale}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </IntlProvider>
  );
};

export default App;

/*           <Route path="/login" component={Login} />
          <ProtectedRoute path="/doctor" component={DoctorDashboard} />
          <Route path="/patient" component={PatientView} /> */