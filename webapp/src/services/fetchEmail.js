import {
    getSolidDataset,
    getThing,
    addUrl,
    setUrl,
    getUrl,
    saveSolidDatasetAt,
    setThing,
    getStringNoLocale,
    setStringNoLocale
} from "@inrupt/solid-client";

import solidAuth from 'solid-auth-client';

import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

export async function fetchEmail(webId) {
    const myDataset = await getSolidDataset(webId.split("#me")[0]);
    const profile = getThing(myDataset, webId);
    const emailUrl = await getUrl(profile, VCARD.hasEmail);

    if(!emailUrl)
        return;

    const emailDataset = await getSolidDataset(emailUrl);
    const emailThing = getThing(emailDataset, emailUrl);

    if(!emailThing)
        return;
    
    var email = getUrl(emailThing, VCARD.value)
    if(email)
        email = email.split("mailto:")[1];

    return email;
}

export async function replaceEmail(webId) {
    var myDataset = await getSolidDataset(webId.split("#me")[0]);
    const profile = getThing(myDataset, webId);
    //const name = await getStringNoLocale(profile, FOAF.name);
    //console.log(name)

    var newName = setStringNoLocale(profile, FOAF.name, "Prueba");
    myDataset = setThing(myDataset, profile);
    await saveSolidDatasetAt(webId.split("#me")[0], myDataset, { fetch: solidAuth.fetch });

    /**const emailUrl = await getUrl(profile, VCARD.hasEmail);

    if(!emailUrl)
        return;

    let emailDataset = await getSolidDataset(emailUrl);
    let emailThing = getThing(emailDataset, emailUrl);

    if(!emailThing)
        return;
    
    var newEmail = setUrl(emailThing, VCARD.value, "mailto:ejemplo@email.com");
    emailDataset = setThing(emailDataset, newEmail);
    await saveSolidDatasetAt(emailUrl, emailDataset, { fetch: solidAuth.fetch });
    **/
}