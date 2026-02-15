import { useState } from "react"
import { useGetUser } from "@/modules/user/hooks/use-get-user"

export function DashboardPage() {
  const [userId, setUserId] = useState("")

  const { mutate, data, isPending, error } = useGetUser()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!userId) return

    mutate(userId)
  }

  return (
    <div>
      <h1>Buscar Usuário</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {error && <p>Erro ao buscar usuário</p>}

      {data && (
        <div>
          <p>ID: {data.id}</p>
          <p>Nome: {data.name}</p>
          <p>Email: {data.email.value}</p>
          <p>Senha: {data.password.hashed}</p>
          <p>Role: {data.role}</p>
        </div>
      )}
    </div>
  )
}
