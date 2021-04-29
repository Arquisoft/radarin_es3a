import { fetchProfile } from "./fetchProfile";
import { foaf } from 'rdf-namespaces';

let friends

export async function fetchFriends() {
    if(friends)
        return friends

    console.log("Obteniendo amigos")
    let profile = await fetchProfile();
    if(profile == null){
        return null;
    }
    friends = await profile.getAllRefs(foaf.knows)
    return friends;
}