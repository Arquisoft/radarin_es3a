

//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production
export async function addUser(webId, location){
    console.log("Hola")
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'webId': webId, 'location': location})
      })
    return await response.json()
}

//remove the wanted user
export async function deleteFromDB(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+"/users/remove",{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'webId': webId})
    })
    try {
        return await response.json();
    } catch(error) {
        console.log("weapp/api error")
        return undefined;
    }
}

export async function getUsers(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list')
    return await response.json()
}

export async function getUserByWebId(webId) {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/byWebId', {
        method: 'GET',
        headers: {'webId': webId}
    });
    
    try {
        return await response.json();
    } catch(error) {
        return undefined;
    }
    
}

export async function updateToken(webId, token) {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/update/token', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'webId': webId, 'token': token})
    });
    
    try {
        return await response.json();
    } catch(error) {
        return undefined;
    }
}

export async function updateLocation(webId, location) {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/update', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'webId': webId, 'location': location})
      })
    return await response.json()
}

// Enviar email
export async function sendEmail(subject, message, destinatary) {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/email/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'subject': subject, 'destinatary': destinatary, 'message': message})
    });
    return await response.json();
}

export async function sendNotification(title, message, destinatary) {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/notification', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'title': title, 'message': message, 'destinatary': destinatary })
    });
    return await response.json();
}