using Microsoft.EntityFrameworkCore;
using Ssharp_React.Date1;
//using Ssharp_React.Date1;

// ������� ������ WebApplicationBuilder ��� ��������� � �������� ASP.NET Core ����������.
// �������� ������������ � ������������ �� ������ appsettings.json
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// ��������� ����������� � ��������������� � ������� ����������.
// ��� ��������� ������������ ����������� ��� ��������� HTTP-�������� � ����������� ������������� � ����� �� ��� �������.
// ����� ����, ������������� ��������� ��������� �������������, ���������� � ASP.NET Core,
// ��� ��������� ����������, ����� ���������� ������ ������������ ������������ HTTP-������.
builder.Services.AddControllersWithViews();

// ��������� �������� ���� ������ ApplicationDbContex.cs � ������� ����������.
// � ������ ������ ������������ SQL Server � �������� ���������� ���� ������,
// � ������ ����������� ������� �� ����� ������������ appsettings.json.
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
app.UseAuthorization(); // ��������� �������� ����������� � ����������.


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
