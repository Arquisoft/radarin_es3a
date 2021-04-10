import { fetchFriends } from "./fetchFriends";
import { fetchEmail, replaceEmail } from "./fetchEmail";
import solidAuth from 'solid-auth-client';
import { getUserByWebId, sendEmail, sendNotification } from "../api/api";
import { fetchName } from "./fetchProfile";

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
    let name;
    let friends;
    try{
        
        name = await fetchName(currentSession.webId);
        friends = await fetchFriends();
    }catch(err){console.log(err);}
    
    

    for(let index in friends) {
        let friendName = await fetchName(friends[index]);
        let message = "Hola " + friendName + ", ¡Tu amig@ " + name + " se acaba de conectar a Radarin_es3a!";
       
        let friendEmail = await fetchEmail(friends[index]);
        if(friendEmail)          
            sendEmail("Radarin_es3a", 
                        message,
                        friendEmail);          

        let friend = await getUserByWebId(friends[index]);
        if(friend && friend.token) 
            sendNotification("Radarin_es3a", message, friend.token);
    }

    isMapNotAreadyAccessed = false;
}
