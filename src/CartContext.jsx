import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('elsea_cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('elsea_cart', JSON.stringify(items))
  }, [items])

  const addItem = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.title === product.title)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 }
        return copy
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeItem = (title) => {
    setItems((prev) => prev.filter((p) => p.title !== title))
  }

  const clear = () => setItems([])

  const total = useMemo(() => {
    return items.reduce((sum, p) => sum + p.price * p.qty * (1 - (p.discount || 0)/100), 0)
  }, [items])

  const value = { items, addItem, removeItem, clear, total, count: items.reduce((a,b)=>a+b.qty,0) }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(){
  const ctx = useContext(CartContext)
  if(!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
