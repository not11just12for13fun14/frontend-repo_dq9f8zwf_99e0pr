export default function Footer(){
  return (
    <footer className="mt-16 bg-green-900 text-green-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Elsea Grosir</h3>
          <p className="text-green-200 mt-2 text-sm">Toko sembako lengkap dengan harga bersahabat dan kualitas terjamin.</p>
        </div>
        <div>
          <h4 className="font-semibold">Kategori</h4>
          <ul className="mt-2 space-y-1 text-sm text-green-200">
            <li>Beras</li>
            <li>Minyak</li>
            <li>Gula</li>
            <li>Telur</li>
            <li>Tepung</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Kontak</h4>
          <p className="mt-2 text-sm text-green-200">WhatsApp: 0812-3456-7890</p>
          <p className="text-sm text-green-200">Email: info@elseagrosir.id</p>
          <p className="text-sm text-green-200">Alamat: Jl. Mawar No. 12, Jakarta</p>
        </div>
        <div>
          <h4 className="font-semibold">Jam Operasional</h4>
          <p className="mt-2 text-sm text-green-200">Senin - Sabtu: 08.00 - 20.00</p>
          <p className="text-sm text-green-200">Minggu: 09.00 - 17.00</p>
        </div>
      </div>
      <div className="border-t border-green-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-green-300 text-sm">
          © 2025 Elsea Grosir — Toko Sembako Terpercaya
        </div>
      </div>
    </footer>
  )
}
