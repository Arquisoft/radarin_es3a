import React from 'react';
import { updateCoordinate } from '../services/updateCoordinate';
import { getCoordinates, useCoordinates } from '../hooks/useCoordinates';
import { schema } from 'rdf-namespaces';

export function Coordinates () {
  const notesList = useCoordinates();
  const [formContent, setFormContent] = React.useState('');
  const [updatedNotesList, setUpdatedNotesList] = React.useState();

  if (!notesList) {
    return null;
  }
  const notes = getCoordinates(updatedNotesList || notesList);

  async function saveNote(event) {
    event.preventDefault();
    if (!notesList) {
      return;
    }

    // deleteNote(notesList);
    const updatedDoc = await updateCoordinate(formContent, notesList);
    setUpdatedNotesList(updatedDoc);
    setFormContent('');
  }

  async function deleteNote(note) {
    const notesDocument = updatedNotesList || notesList;
    if (!notesDocument) {
      return;
    }

    notesDocument.removeSubject(note.asRef());
    const updatedDoc = await notesDocument.save();
    setUpdatedNotesList(updatedDoc);
  }


  const noteElements = notes.map((note) => (
    <article key={note.asRef()} className="card content">
      <pre>
        {note.getString(schema.text)}
      </pre>
    </article>
  ));

  return (
    <>
      <section className="section">
        <form onSubmit={saveNote}>
          <div className="field">
            <div className="control">
              <textarea
                onChange={(e) => { e.preventDefault(); setFormContent(e.target.value); }}
                name="note"
                id="note"
                className="textarea"
                value={formContent}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary">Add coordinate</button>
            </div>
          </div>
        </form>
      </section>
      <section className="section">
        {noteElements}
      </section>
    </>
  );
};