import axios from 'axios';

const API_KEY = 'AIzaSyCVAMCaJ0UVFhyIqpXxS4o2OaYjoJXJrac'

async function authenticate(type, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=${API_KEY}`

    const response = await axios.post(url,
        {
            email : email,
            password : password,
            returnSecureToken : true
        }
    );

    const token = response.data.idToken;
    return token;
}

export function createUser(email, password){
    return authenticate('signUp', email, password);
}

export function login(email, password){
    return authenticate('signInWithPassword', email, password);
}


