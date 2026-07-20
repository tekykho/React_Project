import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductCard from "./ProductCard";
import Navbar from './Navbar';
import "./App.css";
// import pages
import HomePage from './Homepage';
import ProductPage from './ProductPage';
import ProfilePage from './ProfilePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

// import wouter
import { Route, Switch } from 'wouter'

import { useFlashMessage } from './FlashMsgStore';
import FlashMessageDisplay from './FlashMsgDisplay';

export default function App() {

  return <>

    <FlashMessageDisplay />

    <Navbar />

    {/* <Switch> screen changes depending on the url */}
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />

    </Switch>

    {/* footer */}
    <footer className="bg-dark text-white text-center py-1 small">
      <div className="container">
        <p>&copy; 2026 OMO. All rights reserved.</p>
      </div>
    </footer>
  </>
}