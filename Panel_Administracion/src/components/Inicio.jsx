import React from 'react'
import { BarChart2, Users, Settings } from 'lucide-react'

const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </div>
)

export default function Inicio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        icon={BarChart2}
        title="Estadísticas"
        description="Visualiza el rendimiento general del sistema en tiempo real."
      />
      <Card
        icon={Users}
        title="Gestión de usuarios"
        description="Administra cuentas, roles y permisos de los usuarios."
      />
      <Card
        icon={Settings}
        title="Configuraciones"
        description="Ajusta parámetros del sistema y personaliza la experiencia."
      />
    </section>
  )
}
