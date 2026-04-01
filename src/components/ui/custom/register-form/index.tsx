import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/custom/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRegister } from "@/modules/user/auth/register/hooks/use-register"
import {
  type DocumentType,
  registerSchema,
  type RegisterSchema,
} from "@/modules/user/auth/register/schemas/register.schema"

const onlyDigits = (value: string) => value.replace(/\D/g, "")

const formatCpf = (value: string) => {
  const digits = onlyDigits(value).slice(0, 11)
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
}

const formatCnpj = (value: string) => {
  const digits = onlyDigits(value).slice(0, 14)
  return digits
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2")
}

const formatPhone = (value: string) => {
  const digits = onlyDigits(value).slice(0, 11)

  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
  }

  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
}

export function RegisterForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [documentType, setDocumentType] = useState<DocumentType>("CPF")

  const { mutateAsync, isPending, error } = useRegister()

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      documentType: "CPF",
      document: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  })

  function handleDocumentTypeChange(type: DocumentType) {
    setDocumentType(type)
    form.setValue("documentType", type)
    form.setValue("document", "")
  }

  async function onSubmit(data: RegisterSchema) {
    await mutateAsync(data)
    navigate("/login")
  }

  return (
    <div className="w-full max-w-[520px] rounded-2xl border border-slate-700 bg-slate-900/70 p-8 text-white shadow-2xl backdrop-blur">
      <h1 className="mb-2 text-2xl font-semibold">Criar conta</h1>
      <p className="mb-8 text-sm text-slate-300">
        Cadastre-se para começar a usar o Agendaqui.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-2 rounded-lg bg-slate-800 p-1">
            <Button
              type="button"
              variant={documentType === "CPF" ? "primary" : "ghost"}
              onClick={() => handleDocumentTypeChange("CPF")}
            >
              Pessoa Física (CPF)
            </Button>

            <Button
              type="button"
              variant={documentType === "CNPJ" ? "primary" : "ghost"}
              onClick={() => handleDocumentTypeChange("CNPJ")}
            >
              Pessoa Jurídica (CNPJ)
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{documentType}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={documentType === "CPF" ? "000.000.000-00" : "00.000.000/0000-00"}
                      className="h-11 bg-slate-800 border-slate-600"
                      value={field.value}
                      onChange={(event) => {
                        const value = event.target.value
                        field.onChange(documentType === "CPF" ? formatCpf(value) : formatCnpj(value))
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(11) 99999-9999"
                      className="h-11 bg-slate-800 border-slate-600"
                      value={field.value}
                      onChange={(event) => field.onChange(formatPhone(event.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome completo"
                    className="h-11 bg-slate-800 border-slate-600"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="voce@email.com"
                    className="h-11 bg-slate-800 border-slate-600"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-4 md:grid-cols-2">
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
                        placeholder="••••••••"
                        className="h-11 bg-slate-800 border-slate-600 pr-10"
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmação de senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-11 bg-slate-800 border-slate-600 pr-10"
                        {...field}
                      />

                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="h-5 text-center">
            {error ? (
              <p className="text-sm text-red-400">
                {error.response?.data.message ?? "Erro ao criar conta"}
              </p>
            ) : null}
          </div>

          <Button type="submit" variant="primary" size="lg" loading={isPending} className="w-full">
            Criar conta
          </Button>

          <p className="text-center text-sm text-slate-300">
            Já tem conta?{" "}
            <Link className="font-semibold text-blue-300 underline" to="/login">
              Fazer login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  )
}
