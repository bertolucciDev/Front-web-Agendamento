import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { loginSchema, type LoginSchema } from "@/modules/user/auth/login/schemas/login.schema"
import { useLogin } from "@/modules/user/auth/login/hooks/use-login"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/custom/button"
import { Link, useNavigate } from "react-router-dom"
import { saveToken } from "@/modules/user/auth/utils/token"

export function LoginForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const { mutateAsync, isPending, error } = useLogin()

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: LoginSchema) {
    try {
      const response = await mutateAsync(data)
      saveToken(response.accessToken)
      navigate("/dashboard")
    } catch {
      // erro tratado no TanStack Query
    }
  }

  return (
    <div className="w-full max-w-[460px] rounded-2xl border border-slate-700 bg-slate-900/70 p-8 text-white shadow-2xl backdrop-blur">
      <h1 className="mb-2 text-2xl font-semibold">Bem-vindo novamente</h1>

      <p className="mb-8 text-sm text-slate-300">
        Entre com suas credenciais para acessar a plataforma
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Digite seu email"
                    className="h-11 border-slate-600 bg-slate-800"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      className="h-11 border-slate-600 bg-slate-800 pr-10"
                      {...field}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="h-5 text-center">
            {error ? (
              <p className="text-sm text-red-400">
                {error.response?.data.message ?? "Erro ao fazer login"}
              </p>
            ) : null}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isPending}
            className="w-full"
          >
            Entrar
          </Button>

          <p className="text-center text-sm text-slate-300">
            Ainda não tem conta?{" "}
            <Link className="font-semibold text-blue-300 underline" to="/register">
              Criar agora
            </Link>
          </p>
        </form>
      </Form>
    </div>
  )
}
