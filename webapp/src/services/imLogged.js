import solidAuth from 'solid-auth-client';
import {useEffect} from 'react';

var boolean = true;

async function updateUser(){
    
}

export async function getLogged() {
    let logged = await solidAuth.currentSession();
    return logged;
}