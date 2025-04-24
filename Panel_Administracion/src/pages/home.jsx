import React from 'react'
import Inicio from '../components/Inicio'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8">
      <Inicio />
    </main>
  </>
  )
}
