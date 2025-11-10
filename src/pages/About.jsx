export default function About(){
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-green-900">
      <h1 className="text-3xl font-extrabold">Tentang Elsea Grosir</h1>
      <p className="mt-4 text-green-800">Elsea Grosir adalah toko grosir sembako yang berkomitmen menyediakan kebutuhan pokok berkualitas dengan harga terjangkau. Kami melayani pembelian ecer maupun grosir untuk rumah tangga, warung, dan usaha kuliner.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 ring-1 ring-green-100 p-4 rounded-lg">
          <h3 className="font-semibold">Visi</h3>
          <p className="text-sm mt-2 text-green-800">Menjadi mitra terpercaya masyarakat dalam pemenuhan kebutuhan pokok sehari-hari.</p>
        </div>
        <div className="bg-green-50 ring-1 ring-green-100 p-4 rounded-lg">
          <h3 className="font-semibold">Misi</h3>
          <ul className="text-sm mt-2 text-green-800 list-disc list-inside space-y-1">
            <li>Memberikan produk berkualitas dan terjangkau.</li>
            <li>Pelayanan cepat, ramah, dan profesional.</li>
            <li>Ketersediaan stok yang konsisten.</li>
          </ul>
        </div>
        <div className="bg-green-50 ring-1 ring-green-100 p-4 rounded-lg">
          <h3 className="font-semibold">Komitmen</h3>
          <p className="text-sm mt-2 text-green-800">Kami menjaga kualitas dan transparansi harga, serta mendukung UMKM lokal.</p>
        </div>
      </div>
    </section>
  )
}
