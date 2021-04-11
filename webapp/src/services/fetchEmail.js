import {
    getSolidDataset,
    getThing,
    setUrl,
    getUrl,
    saveSolidDatasetAt,
    setThing
} from "@inrupt/solid-client";

import solidAuth from 'solid-auth-client';

import { VCARD } from "@inrupt/vocab-common-rdf";

export async function fetchEmail(webId) {
    const myDataset = await getSolidDataset(webId.split("#me")[0]);
    const profile = getThing(myDataset, webId);
    const emailUrl = await getUrl(profile, VCARD.hasEmail);

    if (!emailUrl)
        return null;

    const emailDataset = await getSolidDataset(emailUrl);
    const emailThing = getThing(emailDataset, emailUrl);

    if (!emailThing)
        return null;

    var email = getUrl(emailThing, VCARD.value)
    if (email)
        email = email.split("mailto:")[1];

    return email;
}

export async function replaceEmail(webId) {
    var myDataset = await getSolidDataset(webId.split("#me")[0]);
    const profile = getThing(myDataset, webId);

    const emailUrl = await getUrl(profile, VCARD.hasEmail);

    if (!emailUrl)
        return;

    let emailDataset = await getSolidDataset(emailUrl);
    let emailThing = getThing(emailDataset, emailUrl);

    if (!emailThing)
        return;

    var newEmail = setUrl(emailThing, VCARD.value, "mailto:ejemplo@email.com");
    emailDataset = setThing(emailDataset, newEmail);
    await saveSolidDatasetAt(emailUrl, emailDataset, { fetch: solidAuth.fetch });
}