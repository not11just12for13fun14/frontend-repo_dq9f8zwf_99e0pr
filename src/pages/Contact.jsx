import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [status, setStatus] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('Mengirim...')
    try{
      const res = await fetch(`${API}/api/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
      if(!res.ok) throw new Error('Gagal mengirim')
      setStatus('Terkirim! Kami akan segera menghubungi Anda.')
      e.currentTarget.reset()
    }catch(err){
      setStatus('Terjadi kesalahan, coba lagi.')
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-green-900">
      <h1 className="text-3xl font-extrabold">Kontak</h1>
      <p className="mt-2 text-green-800">Silakan hubungi kami melalui WhatsApp, email, atau formulir berikut.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p><span className="font-semibold">Alamat:</span> Jl. Mawar No. 12, Jakarta</p>
          <p><span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/6281234567890" className="text-green-700 underline">0812-3456-7890</a></p>
          <p><span className="font-semibold">Email:</span> info@elseagrosir.id</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-3 bg-green-50 ring-1 ring-green-100 p-4 rounded-lg">
          <input name="name" required placeholder="Nama" className="w-full px-3 py-2 rounded-md ring-1 ring-green-200 focus:ring-green-500 outline-none" />
          <input name="email" type="email" required placeholder="Email" className="w-full px-3 py-2 rounded-md ring-1 ring-green-200 focus:ring-green-500 outline-none" />
          <input name="phone" placeholder="No. HP / WhatsApp" className="w-full px-3 py-2 rounded-md ring-1 ring-green-200 focus:ring-green-500 outline-none" />
          <textarea name="message" required rows="4" placeholder="Pesan" className="w-full px-3 py-2 rounded-md ring-1 ring-green-200 focus:ring-green-500 outline-none"></textarea>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition">Kirim</button>
          <div className="text-sm text-green-700">{status}</div>
        </form>
      </div>
    </section>
  )
}
