using NotesDAL.Entities;
using System.Collections.Generic;

namespace NotesDAL
{
    public interface INoteRepository
    {
        Note Create(Note note);
        void Delete(string id);
        Note Update( Note note);
        List<Note> GetAll();
        Note Get(string id);
    }
}
