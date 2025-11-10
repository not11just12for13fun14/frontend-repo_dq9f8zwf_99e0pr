import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { CartProvider, useCart } from './CartContext'

function Layout(){
  const { count } = useCart()
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar cartCount={count} />
      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/produk" element={<Products />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/keranjang" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 active:scale-95 transition">Chat WhatsApp</a>
    </div>
  )
}

export default function App(){
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  )
}
