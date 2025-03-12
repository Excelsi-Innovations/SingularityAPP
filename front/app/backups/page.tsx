import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, Download, Upload, Clock } from "lucide-react"

export default function BackupsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Gerenciador de Backups</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Status do Backup</CardTitle>
              <CardDescription>Informações sobre o último backup realizado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Último backup:</span>
                <span className="font-medium">Hoje, 14:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tamanho do backup:</span>
                <span className="font-medium">2.4 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Localização:</span>
                <span className="font-medium">Local (C:/FortiVault/Backups)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="font-medium">Atualizado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Criar Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">Crie um backup manual dos seus dados</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Criar Backup Agora</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Restaurar Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">Restaure seus dados a partir de um backup</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Selecionar Arquivo
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Backup Automático
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">Configure backups automáticos</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Configurar
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Histórico de Backups</CardTitle>
              <CardDescription>Últimos backups realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <BackupHistoryItem date="Hoje, 14:30" size="2.4 MB" location="Local" />
                <BackupHistoryItem date="Ontem, 09:15" size="2.4 MB" location="Local" />
                <BackupHistoryItem date="15/03/2024, 18:45" size="2.3 MB" location="Servidor" />
                <BackupHistoryItem date="10/03/2024, 10:20" size="2.3 MB" location="Local" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BackupHistoryItem({ date, size, location }) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-0">
      <div className="flex items-center gap-3">
        <HardDrive className="h-4 w-4 text-muted-foreground" />
        <div>
          <p className="font-medium">{date}</p>
          <p className="text-sm text-muted-foreground">{size}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm">{location}</span>
        <Button variant="ghost" size="sm">
          <Download className="h-4 w-4" />
          <span className="sr-only">Download</span>
        </Button>
      </div>
    </div>
  )
}

