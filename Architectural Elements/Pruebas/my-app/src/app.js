import React from 'react';
import {
  LoggedIn, LoggedOut,
  Value, List, useWebId
} from '@solid/react';
import  Dashboard  from './components/Dashboard';
import  PopUpPod  from './components/PopUpPod';

import { createDocument, fetchDocument } from 'tripledoc';
import { space, rdf, foaf, solid, schema } from 'rdf-namespaces';
import  Map  from './components/Map';
import credentials from './credentials';

import auth from 'solid-auth-client';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;


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
    <div>
      <header>
        <h1>Prueba 1 / React-Solid
        </h1>
      </header>
      <main>
        <LoggedIn>
          <p>Welcome back, <Value src="user.name"/>.</p>
          {/*<Image src="user.image" defaultSrc="logo192.png" className="pic"/>*/}
          <p> <Value src="user.email"/>.</p>
          <h2>Friends</h2>
          <List src="user.friends.firstName"/>
          <Dashboard/>
          <Map 
          googleMapURL= {mapURL}
          containerElement= {<div style={{height: '50vh'}}/>}
          mapElement= {<div style={{height:'100vh'}}/>}
          loadingElement={<p>Cargando</p>}/>
        </LoggedIn>
        <LoggedOut>
            <p>You are logged out.</p>
        </LoggedOut>
      </main>
      <footer>
      </footer>
    </div>
  );
}