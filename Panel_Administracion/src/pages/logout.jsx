import React from 'react'
import LogoutComponent from '../components/Logout'
import Header from '../components/Header'

export default function LogOut() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8">
      <LogoutComponent />
    </main>
  </>
  )
}
