import {
    getSolidDataset,
    getThingAll,
    getStringNoLocale,
} from "@inrupt/solid-client";
// import { FOAF, VCARD, SCHEMA_INRUPT_EXT } from "@inrupt/vocab-common-rdf";
import { schema } from 'rdf-namespaces';
import solidAuth from 'solid-auth-client';

export async function getPodString() {

    const currentSession = await solidAuth.currentSession();
    if (!currentSession) {
      return null;
    }
    const webId = currentSession.webId;

    const myDataset = await getSolidDataset(
        //webId + '/public/geo.ttl'
        'https://UO258273.inrupt.net/public/geo.ttl'
    );

    const profile = getThingAll(
        myDataset
    );

    /*
    if (profile[0] === null) {
        return 'Prueba';
    } else {
        const fn = getStringNoLocale(profile[0], schema.text);

        return fn;
    }
    */
    
    return (profile[0] === null) ? 
        getStringNoLocale(profile[0], schema.text) 
        : 'Placeholder';
}