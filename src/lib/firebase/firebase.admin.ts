//Import Firebase Admin Service Account with $env functionality in Svelte
import {FIREBASE_ADMIN_KEY} from '$env/static/private'
//Import firebase admin SDK
import admin, { auth } from "firebase-admin"

var firebaseAdmin:admin.app.App
var firebaseAdminAuth:admin.auth.Auth
/**
* create firebase admin singleton
*/
function getFirebaseAdmin():admin.app.App{
    if(!firebaseAdmin){
        if(admin.apps.length == 0){
            firebaseAdmin = admin.initializeApp({
                
                credential:admin.credential.cert(JSON.parse(FIREBASE_ADMIN_KEY))
            })
        }
        else{
            firebaseAdmin = admin.apps[0]!;
        }
           
    }

    return firebaseAdmin;
}
/**
* create firebase admin auth singleton
*/
function getFirebaseAdminAuth():admin.auth.Auth{
    const currentAdmin:admin.app.App = getFirebaseAdmin();
    if(!firebaseAdminAuth){
        firebaseAdminAuth = currentAdmin.auth()
    }
    return firebaseAdminAuth;
}