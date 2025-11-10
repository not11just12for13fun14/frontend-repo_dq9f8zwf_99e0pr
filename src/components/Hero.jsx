import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-green-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-8">
        <div>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}}
            className="text-4xl md:text-5xl font-extrabold leading-tight">
            Elsea Grosir
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.1}}
            className="mt-4 text-green-100">
            Pusat kebutuhan sembako lengkap: beras, minyak, gula, telur, dan bahan pokok lainnya. Harga grosir, kualitas terbaik.
          </motion.p>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.2}}
            className="mt-6 flex gap-3">
            <a href="/produk" className="bg-yellow-400 text-green-900 font-semibold px-5 py-2 rounded-md hover:brightness-105 transition">Belanja Sekarang</a>
            <a href="#promo" className="border border-yellow-300 text-yellow-300 px-5 py-2 rounded-md hover:bg-yellow-300/10 transition">Lihat Promo</a>
          </motion.div>
          <div id="promo" className="mt-6 inline-flex items-center gap-2 bg-yellow-300 text-green-900 px-3 py-1 rounded-full font-semibold text-sm">
            Diskon Spesial Minggu Ini
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl bg-green-800/40 ring-1 ring-green-600/40 flex items-center justify-center">
            <span className="text-yellow-300 font-bold text-lg">Toko Sembako Terpercaya</span>
          </div>
        </div>
      </div>
    </section>
  )
}
