import { useEffect, useState } from "react";

export function useAuth(authFirebase) {
    const [authentification, setAuthentification] = useState(null);
    
    const auth = authFirebase();
    
    const provider = new authFirebase.GoogleAuthProvider();

    const logIn = () => auth.signInWithPopup(provider) 

    const logOut = () => auth.signOut()
        .then()
        .catch(err => console.error(err))

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                setAuthentification(user)
            } else {
                setAuthentification(null)
            }
        })
    }, [authentification]);

    return { authentification, logIn, logOut };
}