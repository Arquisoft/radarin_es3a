import { fetchFriends } from "./fetchFriends";
import { fetchEmail } from "./fetchEmail";
import solidAuth from 'solid-auth-client';
import { getUserByWebId, sendEmail, sendNotification } from "../api/api";
import { fetchName } from "./fetchProfile";
import { showNotification } from '../App';

let isMapNotAreadyAccessed = true;

export async function notify(webId) {
    let user;
    try{
        user = await getUserByWebId(webId);
    }catch{
        user = {token:''};
    }
    if(!user) {
        return;
    }
    const token = user.token;
    if(!token || token === '')
        return;

    sendNotification("Hola", "Esto es una prueba de notificación", token);
};

export async function notifyOpenMap() {
    if (isMapNotAreadyAccessed) {
        console.log("Mapa aún no accedido");
    } else {
        console.log("Mapa ya accedido");
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
};

export function notifyNearbyFriend(friendWebId) {
    solidAuth.currentSession().then(session => {
        if(!session)
            return;
        fetchName(friendWebId).then(friendName => {
            showNotification({ 
                'title': '¡Estás cerca de un amigo!',
                'body': 'Tu amig@ ' + friendName + ' está cerca de ti'});
        });
    });
};