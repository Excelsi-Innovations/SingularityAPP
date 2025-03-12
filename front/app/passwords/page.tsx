import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Copy, Edit, Trash2, Eye, Plus } from "lucide-react"

// This would be a client component in a real app
export default function PasswordsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Gerenciador de Senhas</h1>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nova Senha
            </Button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar senhas..." className="pl-10" />
          </div>

          <div className="grid gap-4">
            <PasswordItem name="Google" username="usuario@gmail.com" url="https://google.com" />
            <PasswordItem name="Facebook" username="usuario@facebook.com" url="https://facebook.com" />
            <PasswordItem name="Twitter" username="@usuario" url="https://twitter.com" />
            <PasswordItem name="Instagram" username="usuario.insta" url="https://instagram.com" />
            <PasswordItem name="LinkedIn" username="usuario@email.com" url="https://linkedin.com" />
            <PasswordItem name="GitHub" username="usuario" url="https://github.com" />
          </div>
        </div>
      </main>

      <Button size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg">
        <Plus className="h-6 w-6" />
        <span className="sr-only">Adicionar senha</span>
      </Button>
    </div>
  )
}

function PasswordItem({ name, username, url }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              {name.charAt(0)}
            </div>
            <div>
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-muted-foreground">{username}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
              <span className="sr-only">Mostrar senha</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copiar senha</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Editar</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Excluir</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

