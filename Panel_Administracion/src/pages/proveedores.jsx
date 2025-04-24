import React from 'react'
import Proveedor from '../components/Proveedor'
import Header from '../components/Header'

export default function Proveedores() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8">
      <Proveedor />
    </main>
  </>
  )
}
