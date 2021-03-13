import { rdf, schema } from 'rdf-namespaces';

export async function updateCoordinate(coordinate, coordinates) {
  const newNote = coordinates.addSubject();
  newNote.addRef(rdf.type, schema.TextDigitalDocument);
  newNote.addLiteral(schema.text, coordinate);

  return await coordinates.save([newNote]);
}
