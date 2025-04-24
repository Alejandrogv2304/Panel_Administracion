import React from 'react'

export default function LogoutComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center">
          {/* Icono de logout */}
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-blue-600 dark:text-blue-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
              />
            </svg>
          </div>
          
          {/* Título */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Sesión finalizada</h2>
          
          {/* Mensaje */}
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Has cerrado sesión correctamente. ¿Deseas volver a ingresar?
          </p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Iniciar sesión nuevamente
            </button>
            
            <button
              className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Ir a la página principal
            </button>
          </div>
          
          {/* Mensaje adicional */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
            ¿Problemas para iniciar sesión? <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Contacta al soporte</a>
          </p>
        </div>
      </div>
    </div>
  )
}