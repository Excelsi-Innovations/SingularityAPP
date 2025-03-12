import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Key, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./mode-toggle"

export function MainNav() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Key className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FortiVault</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="/passwords" className="text-sm font-medium hover:underline underline-offset-4">
            Senhas
          </Link>
          <Link href="/backups" className="text-sm font-medium hover:underline underline-offset-4">
            Backups
          </Link>
          <Link href="/sync" className="text-sm font-medium hover:underline underline-offset-4">
            Sincronização
          </Link>
          <Link href="/settings" className="text-sm font-medium hover:underline underline-offset-4">
            Configurações
          </Link>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Perfil</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}

