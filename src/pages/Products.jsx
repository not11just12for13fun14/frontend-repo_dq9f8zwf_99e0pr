import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Products(){
  const [data, setData] = useState({ items: [], categories: [] })
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('')

  const load = () => {
    const params = new URLSearchParams()
    if(q) params.set('q', q)
    if(cat) params.set('category', cat)
    fetch(`${API}/api/products?${params.toString()}`).then(r=>r.json()).then(setData)
  }

  useEffect(() => { load() }, [])
  useEffect(() => { const t = setTimeout(load, 300); return () => clearTimeout(t) }, [q, cat])

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
        <h1 className="text-2xl font-bold text-green-900">Semua Produk</h1>
        <div className="flex gap-2">
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Cari produk..." className="px-3 py-2 rounded-md ring-1 ring-green-200 focus:ring-green-500 outline-none" />
          <select value={cat} onChange={(e)=>setCat(e.target.value)} className="px-3 py-2 rounded-md ring-1 ring-green-200 focus:ring-green-500 outline-none">
            <option value="">Semua Kategori</option>
            {data.categories.map((c)=> <option key={c} value={c}>{c[0].toUpperCase()+c.slice(1)}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {data.items.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </section>
  )
}
