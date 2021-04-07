import { fetchFriends } from "./fetchFriends";
import { fetchEmail, replaceEmail } from "./fetchEmail";
import solidAuth from 'solid-auth-client';
import { getUserByWebId, sendEmail, sendNotification } from "../api/api";
import { fetchName } from "./fetchProfile";
import { getToken } from "./firebase";

let isMapNotAreadyAccessed = true;

export async function notify(webId) {
    /* const currentSession = await solidAuth.currentSession();
    if(!currentSession)
        return;

    let email = await fetchEmail(currentSession.webId);
    if(email)
        sendEmail("Prueba de envío de email", "Esto es una prueba de Radarin_es3a", email); */

    const user = await getUserByWebId(webId);
    const token = user.token;
    if(!token)
        return;

    sendNotification("Holaaaa", "Esto es una prueba de notificación", token);
   
}

export async function notifyOpenMap() {
    if (isMapNotAreadyAccessed) {
        console.log("Mapa aún no accedido")
    } else {
        console.log("Mapa ya accedido")
    }
    
    if(!isMapNotAreadyAccessed)
        return;

    const currentSession = await solidAuth.currentSession();
    let name = await fetchName(currentSession.webId);
    let friends = await fetchFriends();

    for(let index in friends) {
        let friendEmail = await fetchEmail(friends[index]);
        if(friendEmail) {
            let friendName = await fetchName(friends[index]);
            sendEmail("Radarin_es3a", 
                        "Hola " + friendName + ", ¡Tu amig@ " + name + " se acaba de conectar a Radarin_es3a!",
                        friendEmail);
        }
    }

    isMapNotAreadyAccessed = false;
}
