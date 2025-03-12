import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Key, HardDrive, RefreshCw, Plus } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold mb-8">Bem-vindo ao FortiVault</h1>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Minhas Senhas */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  Minhas Senhas
                </CardTitle>
                <CardDescription>Gerencie suas senhas com segurança</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">senhas armazenadas</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/passwords">Gerenciar Senhas</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Backups */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" />
                  Backups
                </CardTitle>
                <CardDescription>Mantenha seus dados seguros</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Último backup:</p>
                <p className="font-medium">Hoje, 14:30</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/backups">Criar Backup</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Sincronização */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  Sincronização
                </CardTitle>
                <CardDescription>Sincronize entre dispositivos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <p className="text-sm">Sincronizado</p>
                </div>
                <p className="text-sm text-muted-foreground">3 dispositivos conectados</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/sync">Gerenciar Sincronização</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Button size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg">
        <Plus className="h-6 w-6" />
        <span className="sr-only">Adicionar senha</span>
      </Button>

      <footer className="border-t py-4 px-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 FortiVault. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Sobre
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Documentação
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Suporte
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

