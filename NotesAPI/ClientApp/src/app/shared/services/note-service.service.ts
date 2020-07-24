import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetNoteView } from '../views/get-note-view';
import { environment } from 'src/environments/environment';
import { Note } from '../views/note';
import { AddNoteView } from '../views/add-note-view';
import { UpdateNoteView } from '../views/update-note-view';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  public getNotes(): Observable<GetNoteView[]> {
    return this.http.get<GetNoteView[]>(environment.apiUrl + '/api/note/getall');
  }
  public getNote(id: string): Observable<GetNoteView> {
    return this.http.get<GetNoteView>(environment.apiUrl + '/api/note/get/' + id);
  }
  public delete(id: string): Observable<null> {
    return this.http.delete<null>(environment.apiUrl + '/api/note/delete/' + id);
  }
  public create(note: Note): Observable<Note> {
    const newNote: AddNoteView = {
      text: note.text
    }
    return this.http.post<Note>(environment.apiUrl + '/api/note/create', newNote);
  }
  public update(note: Note): Observable<Note> {
    debugger;
    const newNote: UpdateNoteView = {
      id: note.id,
      text: note.text
    }
    return this.http.put<Note>(environment.apiUrl + '/api/note/update/' + newNote.id, newNote);
  }
}
