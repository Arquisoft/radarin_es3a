import React from 'react';
import {
  LoggedIn, LoggedOut,
  Value, List, useWebId
} from '@solid/react';
import  Dashboard  from './components/Dashboard';
import  PopUpPod  from './components/PopUpPod';

import { createDocument, fetchDocument } from 'tripledoc';
import { space, rdf, foaf, solid, schema } from 'rdf-namespaces';

import auth from 'solid-auth-client';



async function getName(webId) {
  /* 1. Fetch the Document at `webId`: */
  const webIdDoc = await fetchDocument(webId);
  /* 2. Read the Subject representing the current user's profile: */
  const profile = webIdDoc.getSubject(webId);
  /* 3. Get their foaf:name: */
  return profile.getString(foaf.name)
}


async function getNotesList(profile) {
  /* 1. Check if a Document tracking our notes already exists. */
  const publicTypeIndexRef = profile.getRef(solid.publicTypeIndex);
  const publicTypeIndex = await fetchDocument(publicTypeIndexRef);
  const notesListEntry = publicTypeIndex.findSubject(solid.forClass, schema.TextDigitalDocument);

  /* 2. If it doesn't exist, create it. */
  if (notesListEntry === null) {
    // We will define this function later:
    return initialiseNotesList(profile, publicTypeIndex);
  }

  /* 3. If it does exist, fetch that Document. */
  const notesListRef = notesListEntry.getRef(solid.instance);
  return await fetchDocument(notesListRef);
}


async function initialiseNotesList(profile, typeIndex) {
  // Get the root URL of the user's Pod:
  const storage = profile.getRef(space.storage);

  // Decide at what URL within the user's Pod the new Document should be stored:
  const notesListRef = storage + 'public/geolocation.ttl';
  // Create the new Document:
  const notesList = createDocument(notesListRef);
  await notesList.save();

  // Store a reference to that Document in the public Type Index for `schema:TextDigitalDocument`:
  const typeRegistration = typeIndex.addSubject();
  typeRegistration.addRef(rdf.type, solid.TypeRegistration)
  typeRegistration.addRef(solid.instance, notesList.asRef())
  typeRegistration.addRef(solid.forClass, schema.TextDigitalDocument)
  await typeIndex.save([ typeRegistration ]);

  // And finally, return our newly created (currently empty) notes Document:
  return notesList;
}


var a = getName("https://error404usernamenotfound.inrupt.net/profile/card#me");
var b = getNotesList(a);

export default function App() {
  return (
    <React.StrictMode>

    <LoggedOut>
      <div>
          {/* <LoginButton popup="./popup.html"/> */}
          <p>Please, log in your Pod.</p>
          <PopUpPod/>
      </div>
    </LoggedOut>

    <LoggedIn>
      <p>Welcome, <Value src="user.name"/>.</p>
      <h2>Friends</h2>
      {/*
      <ul>
        {elements.map((value, index) => {
          return <li key={index}>{value}</li>
          
        })}
      </ul>
      */}
      <List src="user.friends"/>

      <p>Prueba: {useWebId() + "/algo"}</p>
      <p>Prueba2: {b.toString()}</p>
      <p>Prueba3: {a.toString()}</p>
    </LoggedIn>

    </React.StrictMode>
  );
}