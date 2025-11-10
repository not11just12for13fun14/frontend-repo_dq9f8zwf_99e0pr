import { useCart } from '../CartContext'

export default function Cart(){
  const { items, total, removeItem, clear } = useCart()
  const format = (n)=> `Rp${Math.round(n).toLocaleString('id-ID')}`

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-green-900">
      <h1 className="text-3xl font-extrabold">Keranjang Belanja</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-green-800">Keranjang masih kosong.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-4 bg-white ring-1 ring-green-100 p-3 rounded-lg">
              {it.image_url && <img src={it.image_url} alt={it.title} className="w-16 h-16 rounded object-cover" />}
              <div className="flex-1">
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-green-700">{it.qty} x {format(it.price)} {it.discount?`(-${it.discount}%)`:''}</div>
              </div>
              <div className="font-bold">{format(it.qty * it.price * (1 - (it.discount||0)/100))}</div>
              <button onClick={()=>removeItem(it.title)} className="text-red-600 hover:underline text-sm">Hapus</button>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-green-200">
            <div className="text-xl font-extrabold">Total: {format(total)}</div>
            <div className="space-x-2">
              <button onClick={clear} className="px-4 py-2 rounded-md ring-1 ring-green-300 text-green-800 hover:bg-green-50">Kosongkan</button>
              <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded-md font-semibold hover:brightness-105">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
