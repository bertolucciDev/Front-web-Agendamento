import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Página não encontrada
        </h2>

        <p className="mt-3 text-gray-500">
          A página que você está tentando acessar não existe ou foi movida.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
