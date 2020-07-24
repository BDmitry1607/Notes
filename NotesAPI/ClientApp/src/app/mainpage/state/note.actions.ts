import { Action as action } from "@ngrx/store";
import { Note } from "../../shared/views/note";
import { Update } from "@ngrx/entity";

export enum NoteActionTypes {
    LOAD_NOTES = "[Note] Load Notes",
    LOAD_NOTES_SUCCESS = "[Note] Load Notes Success",
    LOAD_NOTES_FAIL = "[Note] Load Notes Fail",
    LOAD_NOTE = "[Note] Load Note",
    LOAD_NOTE_SUCCESS = "[Note] Load Note Success",
    LOAD_NOTE_FAIL = "[Note] Load Note Fail",
    CREATE_NOTE = "[Note] Create Note",
    CREATE_NOTE_SUCCESS = "[Note] Create Note Success",
    CREATE_NOTE_FAIL = "[Note] Create Note Fail",
    UPDATE_NOTE = "[Note] Update Note",
    UPDATE_NOTE_SUCCESS = "[Note] Update Note Success",
    UPDATE_NOTE_FAIL = "[Note] Update Note Fail",
    DELETE_NOTE = "[Note] Delete Note",
    DELETE_NOTE_SUCCESS = "[Note] Delete Note Success",
    DELETE_NOTE_FAIL = "[Note] Delete Note Fail"
}

export class LoadNotes implements action {
    readonly type = NoteActionTypes.LOAD_NOTES;
}

export class LoadNotesSuccess implements action {
    readonly type = NoteActionTypes.LOAD_NOTES_SUCCESS;
    constructor(public payload: Note[]) { }
}

export class LoadNotesFail implements action {
    readonly type = NoteActionTypes.LOAD_NOTES_FAIL;
    constructor(public payload: string) { }
}

export class LoadNote implements action {
    readonly type = NoteActionTypes.LOAD_NOTE;
    constructor(public payload: string) { }
}

export class LoadNoteSuccess implements action {
    readonly type = NoteActionTypes.LOAD_NOTE_SUCCESS;
    constructor(public payload: Note) { }
}

export class LoadNoteFail implements action {
    readonly type = NoteActionTypes.LOAD_NOTE_FAIL;
    constructor(public payload: string) { }
}

export class CreateNote implements action {
    readonly type = NoteActionTypes.CREATE_NOTE;
    constructor(public payload: Note) { }
}

export class CreateNoteSuccess implements action {
    readonly type = NoteActionTypes.CREATE_NOTE_SUCCESS;
    constructor(public payload: Note) { }
}

export class CreateNoteFail implements action {
    readonly type = NoteActionTypes.CREATE_NOTE_FAIL;
    constructor(public payload: string) { }
}

export class UpdateNote implements action {
    readonly type = NoteActionTypes.UPDATE_NOTE;
    constructor(public payload: Note) { }
}

export class UpdateNoteSuccess implements action {
    readonly type = NoteActionTypes.UPDATE_NOTE_SUCCESS;
    constructor(public payload: Update<Note>) { }
}

export class UpdateNoteFail implements action {
    readonly type = NoteActionTypes.UPDATE_NOTE_FAIL;
    constructor(public payload: string) { }
}

export class DeleteNote implements action {
    readonly type = NoteActionTypes.DELETE_NOTE;
    constructor(public payload: string) { }
}

export class DeleteNoteSuccess implements action {
    readonly type = NoteActionTypes.DELETE_NOTE_SUCCESS;
    constructor(public payload: string) { }
}

export class DeleteNoteFail implements action {
    readonly type = NoteActionTypes.DELETE_NOTE_FAIL;
    constructor(public payload: string) { }
}

export type Action =
    LoadNotes |
    LoadNotesSuccess |
    LoadNotesFail |
    LoadNote |
    LoadNoteSuccess |
    LoadNoteFail |
    CreateNote |
    CreateNoteSuccess |
    CreateNoteFail |
    UpdateNote |
    UpdateNoteSuccess |
    UpdateNoteFail |
    DeleteNote |
    DeleteNoteSuccess |
    DeleteNoteFail;
