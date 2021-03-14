import {
    getSolidDataset,
    getThingAll,
    setStringNoLocale,
    addStringNoLocale,
    setThing,
    saveSolidDatasetAt,
    removeThing,
    removeAll
  } from "@inrupt/solid-client";
  // import { fetch } from "@inrupt/solid-client-authn-browser";
  import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";
  import { schema } from 'rdf-namespaces';

  export async function setPodString() {

    const myDataset = await getSolidDataset(
        "https://indiference.inrupt.net/public/geo.ttl"
    );

    const profile = getThingAll(
        myDataset
    );

  
    /*
    profile.forEach(element => {
        let fn = removeAll(element, schema.text);
        saveSolidDatasetAt(
            "https://indiference.inrupt.net/public/geo.ttl",
            fn
        );
    });
    */
     
    
    const fn = removeAll(profile[0], schema.text);

    const savedProfileResource = await saveSolidDatasetAt(
        "https://indiference.inrupt.net/public/geo.ttl",
        fn
    );
    

    return fn;
    
}