import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Palette, RefreshCw, HardDrive } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Configurações</h1>

          <Tabs defaultValue="security" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Segurança</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Aparência</span>
              </TabsTrigger>
              <TabsTrigger value="sync" className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                <span className="hidden sm:inline">Sincronização</span>
              </TabsTrigger>
              <TabsTrigger value="backups" className="flex items-center gap-2">
                <HardDrive className="h-4 w-4" />
                <span className="hidden sm:inline">Backups</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Autenticação</CardTitle>
                  <CardDescription>Configure as opções de autenticação para sua conta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mfa">Autenticação de dois fatores (MFA)</Label>
                      <p className="text-sm text-muted-foreground">
                        Adicione uma camada extra de segurança à sua conta
                      </p>
                    </div>
                    <Switch id="mfa" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha atual</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova senha</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar nova senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <Button>Alterar senha</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sessões ativas</CardTitle>
                  <CardDescription>Gerencie suas sessões ativas em diferentes dispositivos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">Windows - Chrome</p>
                        <p className="text-sm text-muted-foreground">Este dispositivo • Ativo agora</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Encerrar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">iPhone - Safari</p>
                        <p className="text-sm text-muted-foreground">Último acesso: Hoje, 14:30</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Encerrar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium">MacBook - Firefox</p>
                        <p className="text-sm text-muted-foreground">Último acesso: Ontem, 19:45</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Encerrar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tema</CardTitle>
                  <CardDescription>Personalize a aparência do FortiVault</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Modo escuro</Label>
                      <p className="text-sm text-muted-foreground">Alterne entre tema claro e escuro</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <Label>Cor primária</Label>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-600 cursor-pointer ring-2 ring-offset-2 ring-blue-600"></div>
                      <div className="h-8 w-8 rounded-full bg-green-600 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-purple-600 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-red-600 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-orange-600 cursor-pointer"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sync" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Sincronização</CardTitle>
                  <CardDescription>Configure como seus dados são sincronizados entre dispositivos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-sync">Sincronização automática</Label>
                      <p className="text-sm text-muted-foreground">
                        Sincronize automaticamente quando houver alterações
                      </p>
                    </div>
                    <Switch id="auto-sync" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sync-server">Servidor de sincronização</Label>
                    <Input id="sync-server" placeholder="https://sync.fortivault.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sync-key">Chave de acesso</Label>
                    <Input id="sync-key" type="password" />
                  </div>

                  <Button>Salvar configurações</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backups" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Backup</CardTitle>
                  <CardDescription>Configure como seus backups são gerenciados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-backup">Backup automático</Label>
                      <p className="text-sm text-muted-foreground">Crie backups automáticos periodicamente</p>
                    </div>
                    <Switch id="auto-backup" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Frequência de backup</Label>
                    <select
                      id="backup-frequency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="daily">Diariamente</option>
                      <option value="weekly">Semanalmente</option>
                      <option value="monthly">Mensalmente</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backup-location">Local de backup</Label>
                    <Input id="backup-location" placeholder="C:/FortiVault/Backups" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="cloud-backup">Backup na nuvem</Label>
                      <p className="text-sm text-muted-foreground">Armazene backups em servidores remotos</p>
                    </div>
                    <Switch id="cloud-backup" />
                  </div>

                  <Button>Salvar configurações</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

