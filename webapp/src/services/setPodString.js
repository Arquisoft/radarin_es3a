import {
    createSolidDataset,
    createThing,
    setThing,
    addUrl,
    addStringNoLocale,
    saveSolidDatasetAt,
    getSolidDataset,
    getThingAll,
    getStringNoLocale,
    setStringNoLocale,
    removeThing,
    removeAll
} from "@inrupt/solid-client";

import { SCHEMA_INRUPT_EXT, RDF, AS } from "@inrupt/vocab-common-rdf";

import { schema } from 'rdf-namespaces';


export async function setPodString() {

    let myReadingList = createSolidDataset();
//    const myReadingList = await getSolidDataset(
//        "https://UO258273.inrupt.net/public/geo.ttl"
//    );
    const readingListUrl = `https://uo258273.inrupt.net/public/geo.ttl`;
    let titles = ["Saab", "Volvo", "BMW"];

    // Add titles to the Dataset
    for (let i = 0; i < titles.length; i++) {
        let title = createThing({ name: "title" + i });
        title = addUrl(title, RDF.type, AS.Article);
        title = addStringNoLocale(title, SCHEMA_INRUPT_EXT.name, titles[i]);
        myReadingList = setThing(myReadingList, title);
    }

    try {
        let savedReadingList = await saveSolidDatasetAt(
          readingListUrl,
          myReadingList,
          { fetch: fetch }
        );
    
        console.log("Saved");
    
        // Refetch the Reading List
        savedReadingList = await getSolidDataset(
          readingListUrl,
          { fetch: fetch }
        );
    
        let items = getThingAll(savedReadingList);
    
        let listcontent="";
        for (let i = 0; i < items.length; i++) {
          let item = getStringNoLocale(items[i], SCHEMA_INRUPT_EXT.name);
          if (item != null) {
              listcontent += item + "\n";
          }
        }
    
      } catch (error) {
        console.log(error);
      }


/*
    const profile = getThingAll(
        myDataset
    );

    const fn = removeAll(profile[0], schema.text);

    const savedProfileResource = await saveSolidDatasetAt(
        "https://UO258273.inrupt.net/public/geo.ttl",
        fn
    );


    return fn;
*/
}