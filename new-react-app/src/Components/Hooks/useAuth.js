import { useState, useEffect } from "react";

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);

    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    const logIn = () => auth.signInWithPopup(provider).catch((err) => console.error(err.message));
    const logOut = () => auth.signOut().then(() => {window.alert("you have signed off successfully")}).catch((err) => console.error(err.message));

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user);
            if (user) {
                setAuthentication(user)
            } else {
                setAuthentication(null)
            }
        })
    }, [auth, authentication]);

    return {authentication, logIn, logOut};
}