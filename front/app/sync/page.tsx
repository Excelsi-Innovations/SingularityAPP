import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Smartphone, Plus, Trash2 } from "lucide-react"

export default function SyncPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Sincronização</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Status da Sincronização</CardTitle>
              <CardDescription>Informações sobre a sincronização entre dispositivos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Última sincronização:</span>
                <span className="font-medium">Hoje, 15:45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dispositivos sincronizados:</span>
                <span className="font-medium">3 dispositivos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="font-medium">Sincronizado</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Forçar Sincronização Agora
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Dispositivos</CardTitle>
                  <CardDescription>Dispositivos conectados à sua conta</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Dispositivo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <DeviceItem name="Notebook Principal" type="Windows" lastSync="Agora mesmo" isCurrentDevice={true} />
                <DeviceItem name="iPhone 13" type="iOS" lastSync="Há 10 minutos" isCurrentDevice={false} />
                <DeviceItem name="MacBook Pro" type="macOS" lastSync="Há 1 hora" isCurrentDevice={false} />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function DeviceItem({ name, type, lastSync, isCurrentDevice }) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="flex items-center gap-3">
        <Smartphone className="h-5 w-5 text-primary" />
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{name}</p>
            {isCurrentDevice && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Este dispositivo</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{type}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Sincronizado {lastSync}</span>
        {!isCurrentDevice && (
          <Button variant="ghost" size="icon" className="text-destructive">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remover dispositivo</span>
          </Button>
        )}
      </div>
    </div>
  )
}

