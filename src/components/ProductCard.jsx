import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useCart } from '../CartContext'

export default function ProductCard({ product }){
  const { addItem } = useCart()
  const priceAfter = product.discount ? product.price * (1 - product.discount/100) : product.price

  return (
    <motion.div whileHover={{y:-4}} className="bg-white rounded-xl shadow-sm ring-1 ring-green-100 overflow-hidden">
      {product.image_url && (
        <div className="aspect-[4/3] bg-green-50">
          <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-green-900">{product.title}</h3>
        <p className="text-sm text-green-700/80 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            {product.discount > 0 ? (
              <div>
                <div className="text-lg font-extrabold text-green-900">Rp{priceAfter.toLocaleString('id-ID')}</div>
                <div className="text-xs text-green-700 line-through">Rp{product.price.toLocaleString('id-ID')}</div>
              </div>
            ) : (
              <div className="text-lg font-extrabold text-green-900">Rp{product.price.toLocaleString('id-ID')}</div>
            )}
            <div className="text-xs text-green-700">/{product.unit}</div>
          </div>
          <button onClick={() => addItem(product)} className="inline-flex items-center gap-2 bg-green-700 text-white px-3 py-2 rounded-md hover:bg-green-800 active:scale-95 transition">
            <Plus size={16}/> Tambah
          </button>
        </div>
      </div>
    </motion.div>
  )
}
