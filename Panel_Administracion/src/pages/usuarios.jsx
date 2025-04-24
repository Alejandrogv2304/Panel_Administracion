import React from 'react'
import Usuario from '../components/Usuario'
import Header from '../components/Header'

export default function Usuarios() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8">
      <Usuario />
    </main>
  </>
  )
}
