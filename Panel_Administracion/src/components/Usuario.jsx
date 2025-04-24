import React from 'react'

export default function Usuario() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Panel de Administración - Usuarios</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:mb-0">Gestión de Usuarios</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
              Añadir Usuario
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition duration-200">
              Exportar Datos
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input 
                type="text" 
                id="search-users" 
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Buscar usuarios..."
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <label htmlFor="filter-role" className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">Rol:</label>
                <select 
                  id="filter-role" 
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                >
                  <option value="">Todos</option>
                  <option value="admin">Administrador</option>
                  <option value="editor">Editor</option>
                  <option value="user">Usuario</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="filter-status" className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">Estado:</label>
                <select 
                  id="filter-status" 
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                >
                  <option value="">Todos</option>
                  <option value="active">Activo</option>
                  <option value="inactive">Inactivo</option>
                  <option value="suspended">Suspendido</option>
                </select>
              </div>
            </div>
          </div>
          
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Usuario</th>
                <th scope="col" className="px-6 py-3">Correo</th>
                <th scope="col" className="px-6 py-3">Rol</th>
                <th scope="col" className="px-6 py-3">Estado</th>
                <th scope="col" className="px-6 py-3">Último acceso</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Ejemplo de fila de usuario */}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 flex items-center">
                  <img className="w-10 h-10 rounded-full mr-3" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User profile"/>
                  <span className="font-medium text-gray-900 dark:text-white">Juan Pérez</span>
                </td>
                <td className="px-6 py-4">juan.perez@example.com</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Admin</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Activo
                  </div>
                </td>
                <td className="px-6 py-4">Hoy, 10:45 AM</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</button>
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</button>
                </td>
              </tr>
              
              {/* Más usuarios */}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 flex items-center">
                  <img className="w-10 h-10 rounded-full mr-3" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User profile"/>
                  <span className="font-medium text-gray-900 dark:text-white">María García</span>
                </td>
                <td className="px-6 py-4">maria.garcia@example.com</td>
                <td className="px-6 py-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Editor</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Activo
                  </div>
                </td>
                <td className="px-6 py-4">Ayer, 3:20 PM</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</button>
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</button>
                </td>
              </tr>
              
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 flex items-center">
                  <img className="w-10 h-10 rounded-full mr-3" src="https://randomuser.me/api/portraits/men/75.jpg" alt="User profile"/>
                  <span className="font-medium text-gray-900 dark:text-white">Carlos López</span>
                </td>
                <td className="px-6 py-4">carlos.lopez@example.com</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Usuario</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div> Inactivo
                  </div>
                </td>
                <td className="px-6 py-4">Hace 5 días</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Editar</button>
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
          
          {/* Paginación */}
          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-gray-700 dark:text-gray-400">
              Mostrando <span className="font-semibold">1-3</span> de <span className="font-semibold">10</span> usuarios
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                Anterior
              </button>
              <button className="px-3 py-1 text-sm text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:border-blue-700">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                2
              </button>
              <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Usuarios totales</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">124</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">+12 este mes</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Usuarios activos</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">98</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">84% del total</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Nuevos registros</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">15</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">en los últimos 7 días</p>
        </div>
      </div>
    </div>
  )
}