using Microsoft.Extensions.DependencyInjection;

namespace NotesDAL
{
    public class Startup
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<INoteRepository, NoteRepository>();
        }
    }
}
