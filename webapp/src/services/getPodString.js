import {
    getSolidDataset,
    getThing,
    getStringNoLocale,
    getUrlAll
} from "@inrupt/solid-client";
  
import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

export async function getPodString() {

    const myDataset = await getSolidDataset(
        "https://error404usernamenotfound.inrupt.net/profile/card"
    );

    const profile = getThing(
        myDataset,
        "https://error404usernamenotfound.inrupt.net/profile/card#me"
    );

    // 3. Retrieve specific data from the retrieved thing; i.e. profile.

    // 3a. Get a single string data value from the profile.
    // Specifically, the operation returns the profile's VCARD.fn 
    // (i.e., "http://www.w3.org/2006/vcard/ns#fn") value as a string.

    const fn = getStringNoLocale(profile, VCARD.fn);

    // 3b. Get multiple URL data from the profile.
    // Specifically , the operation returns the profile's FOAF.knows
    // (i.e., "http://xmlns.com/foaf/0.1/knows") values as an array of URLs. 
    // The URLs point to the Things representing Persons.

    const acquaintances = getUrlAll(profile, FOAF.knows);

    return acquaintances;
    
}