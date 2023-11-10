using Microsoft.EntityFrameworkCore;
using Ssharp_React.Date1;
//using Ssharp_React.Date1;

// —оздаем объект WebApplicationBuilder дл€ настройки и создани€ ASP.NET Core приложени€.
// собирает конфигурацию и конфигурацию из файлов appsettings.json
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// ƒобавл€ем контроллеры с представлени€ми в сервисы приложени€.
// Ёто позвол€ет использовать контроллеры дл€ обработки HTTP-запросов и отображени€ представлений в ответ на эти запросы.
//  роме того, автоматически добавл€ем поддержку маршрутизации, встроенную в ASP.NET Core,
// что позвол€ет определить, какой контроллер должен обрабатывать определенный HTTP-запрос.
builder.Services.AddControllersWithViews();

// ƒобавл€ем контекст базы данных ApplicationDbContex.cs в сервисы приложени€.
// ¬ данном случае используетс€ SQL Server в качестве провайдера базы данных,
// а строка подключени€ беретс€ из файла конфигурации appsettings.json.
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("DefaultConnection")
));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization(); // ƒобавл€ем механизм авторизации в приложение.


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
