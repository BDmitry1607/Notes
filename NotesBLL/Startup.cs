using Microsoft.Extensions.DependencyInjection;

namespace NotesBLL
{
    public class Startup
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<INoteService, NoteService>();
            NotesDAL.Startup.ConfigureServices(services);
        }
    }
}
