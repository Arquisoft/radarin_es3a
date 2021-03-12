import { rdf, solid } from 'rdf-namespaces';

export async function addToTypeIndex (typeIndex, document, forClass) {
  const typeRegistration = typeIndex.addSubject();
  typeRegistration.addRef(rdf.type, solid.TypeRegistration)
  typeRegistration.addRef(solid.instance, document.asRef())
  typeRegistration.addRef(solid.forClass, forClass)
  return typeIndex.save([ typeRegistration ]);
}