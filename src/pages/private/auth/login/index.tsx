import { LoginForm } from "@/components/ui/custom/login-form"

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl gap-8 rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-2xl backdrop-blur md:grid-cols-2 md:p-10">
        <div className="hidden flex-col justify-center rounded-2xl bg-slate-800/70 p-8 text-slate-100 md:flex">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-300">Agendaqui</p>
          <h2 className="text-3xl font-semibold leading-tight">
            Organize seus agendamentos em um só lugar.
          </h2>
          <p className="mt-4 text-slate-300">
            Acesse sua conta para gerenciar horários, clientes e equipe em tempo real.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
