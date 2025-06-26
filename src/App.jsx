import './App.scss';
import Header from './components/Header'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductListing from './pages/productListing';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Verify from './pages/Verify';
import ForgotPassword from './pages/ForgotPassword';
import ProductDetailDialog from './components/ProductDetailDialog'
import Profile from './components/Profile'
import MyList from './components/MyList'
import MyOrder from './components/MyOrder'
import CartDrawer from './components/CartDrawer'


const App = () => {
  return (
   <>
   <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/my-account" element={<Profile />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/my-orders" element={<MyOrder />} />
      </Routes>
      <Footer />
   </BrowserRouter>
   <ProductDetailDialog />
   </>
  )
}

export default App
