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
import { useNavigate } from "react-router-dom"
import { saveToken } from "@/modules/user/auth/utils/token"

export function LoginForm() {
  const navigate = useNavigate();
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
      // erro tratado pelo TanStack
    }
  }

  return (
    <div className="w-[380px] text-white">
      <h1 className="text-2xl font-semibold mb-2">
        Bem-vindo novamente
      </h1>

      <p className="text-sm text-gray-300 mb-8">
        Entre com suas credenciais para acessar a plataforma
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* EMAIL */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Digite seu email"
                    className="h-11 bg-[#2A3447] border-[#5C6B84]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* PASSWORD */}
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
                      className="h-11 bg-[#2A3447] border-[#5C6B84] pr-10"
                      {...field}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(prev => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* ERRO DA API */}
          <div className="h-5 text-center">
            {error && (
              <p className="text-red-400 text-sm">
                {error.response?.data.message ?? "Erro ao fazer login"}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            loading={isPending}
            className="w-full bg-[#7E9BEF] hover:bg-[#6B88D9]"
          >
            Entrar
          </Button>

          <p className="text-sm text-gray-300 text-center">
            Esqueceu sua senha?{" "}
            <span className="underline cursor-pointer">
              Clique aqui
            </span>
          </p>
        </form>
      </Form>
    </div>
  )
}
