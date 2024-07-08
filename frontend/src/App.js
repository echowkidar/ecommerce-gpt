import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import VendorDashboard from './pages/VendorDashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
       
      <div>
        <Header />
        
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/vendor/dashboard" component={VendorDashboard} />
          <Route component={NotFound} />
          </Routes>
        
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
