import { rdf, schema } from 'rdf-namespaces';

export async function updateCoordinate(note, notesList) {
  const newNote = notesList.addSubject();
  newNote.addRef(rdf.type, schema.TextDigitalDocument);
  newNote.addLiteral(schema.text, note);

  return await notesList.save([newNote]);
}
