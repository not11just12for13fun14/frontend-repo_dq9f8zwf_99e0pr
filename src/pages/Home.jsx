import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Home(){
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch(`${API}/api/featured`).then(r=>r.json()).then(setFeatured).catch(()=>{})
  }, [])

  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Produk Unggulan</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p, i) => <ProductCard key={i} product={p} />)}
        </div>
      </section>
    </div>
  )
}
