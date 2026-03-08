import { Button } from "@/components/ui/custom/button"
import { useState } from "react"
import { Link } from "react-router-dom"

export function NotFoundPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    try{
      setLoading(false)

      new Promise(resolve => setTimeout(resolve, 3000))
    }finally {
      setLoading(true)
    }
  }

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

          <Button
            size="lg"
            variant="primary"
            className="mt-8"
            loading={loading}
            onClick={handleSubmit}
          >
            <Link to="/">
              Voltar para o início
            </Link>
          </Button>
      </div>
    </div>
  )
}
