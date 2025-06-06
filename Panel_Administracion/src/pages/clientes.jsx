import React from 'react'
import Cliente from '../components/Cliente'
import Header from '../components/Header'

export default function Clientes() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8">
      <Cliente />
    </main>
  </>
  )
}
