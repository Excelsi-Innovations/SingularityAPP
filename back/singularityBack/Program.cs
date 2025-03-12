using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);

// Desabilita a maioria dos serviços para reduzir o consumo de memória.
builder.WebHost.UseKestrel(options =>
{
    options.ListenLocalhost(5001, listenOptions =>
    {
        listenOptions.UseHttps("localhost.pfx", "your_password"); // Certificado local
    });
});

var app = builder.Build();

app.MapGet("/", () => "FortiVault Backend is running!");
app.MapPost("/api/save", async (HttpContext context) =>
{
    var body = await new StreamReader(context.Request.Body).ReadToEndAsync();
    Console.WriteLine($"Received data: {body}");
    return Results.Ok("Data saved successfully.");
});

app.Run();
