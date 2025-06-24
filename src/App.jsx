import './App.scss';
import Header from './components/Header'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductListing from './pages/productListing';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import ProductDetailDialog from './components/ProductDetailDialog'
import Profile from './components/Profile'


const App = () => {
  return (
   <>
   <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<Profile />} />
      </Routes>
      <Footer />
   </BrowserRouter>
   <ProductDetailDialog />
   </>
  )
}

export default App
