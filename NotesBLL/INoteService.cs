using NotesBLL.Views;
using NotesDAL.Entities;
using System.Collections.Generic;

namespace NotesBLL
{
    public interface INoteService
    {
        Note Create(AddNoteView note);
        void Delete(string id);
        Note Update( UpdateNoteView note);
        List<GetNoteView> GetAll();
        GetNoteView Get(string id);
    }
}
