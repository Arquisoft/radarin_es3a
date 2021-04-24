import solidAuth from 'solid-auth-client';
import { deleteFromDB } from '../api/api';

export async function deleteUser(webId) {
    const currentSession = await solidAuth.currentSession();
    if (!currentSession)
        return null;
    deleteFromDB(webId);
}