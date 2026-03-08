import { LoginForm } from "@/components/ui/custom/login-form";

export function LoginPage() {
  return (
    <div className="grid grid-cols-2 min-h-screen bg-[#2E3A4D]">
      {/* Lado esquerdo */}
      <div className="flex items-center justify-center p-10">
        <div className="w-[520px] h-[360px] bg-gray-300 rounded-lg shadow-lg relative">
          {/* Barra superior do calendário */}
          <div className="h-16 bg-gray-400 rounded-t-lg" />

          {/* Conteúdo fake */}
          <div className="p-6">
            <div className="h-10 bg-gray-200 rounded mb-6" />

            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 bg-gray-200 rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lado direito */}
      <div className="flex items-center justify-center bg-[#3E4C63]">
        <LoginForm />
      </div>
    </div>
  )
}