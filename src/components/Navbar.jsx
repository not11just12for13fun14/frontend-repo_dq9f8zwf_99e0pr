import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'bg-green-700 text-white' : 'text-green-50 hover:bg-green-700/60 hover:text-white'
        }`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-green-800/90 border-b border-green-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-green-100">
            <span className="text-yellow-300">Elsea</span> Grosir
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Beranda')}
            {navItem('/produk', 'Produk')}
            {navItem('/tentang', 'Tentang Kami')}
            {navItem('/kontak', 'Kontak')}
            <NavLink to="/keranjang" className="relative ml-2 text-green-50 hover:text-yellow-300">
              <ShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-900 text-xs font-bold px-1.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </nav>

          <button className="md:hidden text-green-50" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-3 space-y-2">
            <div className="flex flex-col gap-1">
              {navItem('/', 'Beranda')}
              {navItem('/produk', 'Produk')}
              {navItem('/tentang', 'Tentang Kami')}
              {navItem('/kontak', 'Kontak')}
              <NavLink to="/keranjang" onClick={() => setOpen(false)} className="flex items-center gap-2 text-green-50">
                <ShoppingCart size={18} /> Keranjang
                {cartCount > 0 && (
                  <span className="ml-auto bg-yellow-400 text-green-900 text-xs font-bold px-2 rounded-full">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
