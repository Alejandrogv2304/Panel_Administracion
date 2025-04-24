import React from 'react'

export default function Cliente() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Proveedores de TechSolutions Inc.</h1>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre del Proveedor
              </th>
              <th scope="col" className="px-6 py-3">
                Especialidad
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Tiempo de Entrega
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-600 border-b dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                Electrónicos Global S.A.
              </th>
              <td className="px-6 py-4">
                Componentes electrónicos
              </td>
              <td className="px-6 py-4">
                Mayorista
              </td>
              <td className="px-6 py-4">
                3-5 días
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</a>
                <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Contactar</a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Logística Rápida C.A.
              </th>
              <td className="px-6 py-4">
                Distribución y transporte
              </td>
              <td className="px-6 py-4">
                Logística
              </td>
              <td className="px-6 py-4">
                24-48 horas
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</a>
                <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Contactar</a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Empaques Innovadores Ltda.
              </th>
              <td className="px-6 py-4">
                Materiales de empaque
              </td>
              <td className="px-6 py-4">
                Fabricante
              </td>
              <td className="px-6 py-4">
                5-7 días
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</a>
                <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Contactar</a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Software Enterprise International
              </th>
              <td className="px-6 py-4">
                Soluciones de software
              </td>
              <td className="px-6 py-4">
                Servicios TI
              </td>
              <td className="px-6 py-4">
                Según proyecto
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</a>
                <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Contactar</a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Seguridad Digital Corp.
              </th>
              <td className="px-6 py-4">
                Soluciones de ciberseguridad
              </td>
              <td className="px-6 py-4">
                Consultoría
              </td>
              <td className="px-6 py-4">
                Inmediato
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</a>
                <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Contactar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sección de estadísticas */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Proveedores activos</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">24</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Nuevos este mes</h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">3</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tiempo promedio</h3>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.2 días</p>
        </div>
      </div>
    </div>
  )
}