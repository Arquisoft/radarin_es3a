import { VCARD } from "@inrupt/vocab-common-rdf";
import { foaf } from 'rdf-namespaces';
import solidAuth from 'solid-auth-client';
import { fetchDocument } from 'tripledoc';
import {
  getSolidDataset,
  getThing,
  getUrl
} from "@inrupt/solid-client";

export async function fetchProfile () {
    const currentSession = await solidAuth.currentSession();
    if (!currentSession) {
      return null;
    }
  
    const webIdDoc = await fetchDocument(currentSession.webId);
    const profile = webIdDoc.getSubject(currentSession.webId);
    return profile;
}

export async function fetchName(webId) {
  const webIdDoc = await fetchDocument(webId);
  const profile = webIdDoc.getSubject(webId);

  const name = await profile.getString(foaf.name);
  return name;
}

export async function fetchPhoto(webId) {
  if(!webId)
    return;

  var myDataset = await getSolidDataset(webId.split("#me")[0]);
  const profile = getThing(myDataset, webId);

  const photo = await getUrl(profile, VCARD.hasPhoto);
  return photo;
}
  