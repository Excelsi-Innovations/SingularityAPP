import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Key } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Key className="h-10 w-10 text-primary" />
            <h1 className="text-3xl font-bold">FortiVault</h1>
            <p className="text-muted-foreground">Gerencie suas senhas com segurança</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Registrar</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Entrar</Button>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Nome</Label>
                <Input id="register-name" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input id="register-email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Senha</Label>
                <Input id="register-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Senha</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button className="w-full">Registrar</Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 bg-primary">
        <div className="flex items-center justify-center h-full p-8">
          <div className="max-w-md text-white">
            <h2 className="text-3xl font-bold mb-4">Proteja suas senhas</h2>
            <p className="mb-6">
              O FortiVault oferece uma solução segura e fácil de usar para gerenciar suas senhas e informações
              confidenciais.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span>Criptografia de ponta a ponta</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span>Sincronização entre dispositivos</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span>Backups automáticos</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span>Gerador de senhas fortes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

