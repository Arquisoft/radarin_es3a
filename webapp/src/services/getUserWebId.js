import solidAuth from 'solid-auth-client';

export async function getUserWebId() {
    const currentSession = await solidAuth.currentSession();
    if (!currentSession) {
      return null;
    }
  
    const webId = currentSession.webId;
    return webId;
}
  