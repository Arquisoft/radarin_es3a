import { fetchFriends } from "./fetchFriends";
import { fetchEmail, replaceEmail } from "./fetchEmail";
import solidAuth from 'solid-auth-client';


export async function notify() {
    // sendEmail("Prueba de envío de email", "Esto es una prueba de Radarin_es3a", "thaliacf5c@gmail.com");
}

export async function notifyOpenMap() {
    const currentSession = await solidAuth.currentSession();
    let friends = await fetchFriends();

    let email = await replaceEmail(currentSession.webId)

    for(let index in friends) {
        //let friendEmail = await fetchEmail(friends[index]);
        //console.log(friendEmail)
        //sendEmail("Un amigo tuyo se acaba de conectar a Radarin_es3a!", 
        //            "Hola")
    }
}
