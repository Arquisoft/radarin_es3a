import { fetchProfile } from "./fetchProfile";
import { foaf } from 'rdf-namespaces';

export async function fetchFriends() {
    let profile = await fetchProfile();
    if(profile == null){
        return null;
    }
    let friends = await profile.getAllRefs(foaf.knows)
    return friends;
}