import React from 'react';
import { fetchDocument } from 'tripledoc';
import { solid, schema } from 'rdf-namespaces';
import { usePublicTypeIndex } from './usePublicTypeIndex';
import { initialiseDocument } from '../services/initialiseDocument';

export function useCoordinates() {
  const publicTypeIndex = usePublicTypeIndex();
  const [notesList, setNotesList] = React.useState();

  React.useEffect(() => {
    if (!publicTypeIndex) {
      return;
    }

    (async () => {
      const notesListIndex = publicTypeIndex.findSubject(solid.forClass, schema.TextDigitalDocument);
      if (!notesListIndex) {
        // If no notes document is listed in the public type index, create one:
        const notesList = await initialiseDocument()
        if (notesList === null) {
          return;
        }
        setNotesList(notesList);
        return;
      } else {
        // If the public type index does list a notes document, fetch it:
        const notesListUrl = notesListIndex.getRef(solid.instance);
        if (typeof notesListUrl !== 'string') {
          return;
        }
        const document = await fetchDocument(notesListUrl);
        setNotesList(document);
      }
    })();

  }, [publicTypeIndex]);

  return notesList;
}

export function getCoordinates(coordinates) {
  return coordinates.getSubjectsOfType(schema.TextDigitalDocument);
}
