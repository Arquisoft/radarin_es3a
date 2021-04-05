import { fetchFriends } from "./fetchFriends";
import { fetchEmail, replaceEmail } from "./fetchEmail";
import solidAuth from 'solid-auth-client';
import { sendEmail } from "../api/api";
import { fetchName } from "./fetchProfile";


export async function notify() {
    const currentSession = await solidAuth.currentSession();
    if(!currentSession)
        return;

    let email = await fetchEmail(currentSession.webId);
    if(email)
        sendEmail("Prueba de envío de email", "Esto es una prueba de Radarin_es3a", email);
}

export async function notifyOpenMap() {
    const currentSession = await solidAuth.currentSession();
    let name = await fetchName(currentSession.webId);
    let friends = await fetchFriends();

    for(let index in friends) {
        let friendEmail = await fetchEmail(friends[index]);
        if(friendEmail) {
            console.log(friendEmail)
            let friendName = await fetchName(friends[index]);
            sendEmail("Radarin_es3a", 
                        "Hola " + friendName + ", ¡Tu amig@ " + name + " se acaba de conectar a Radarin_es3a!",
                        friendName);
        }
    }
}
