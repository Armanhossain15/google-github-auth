import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase_init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState([])
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    //ggole sign in
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    //github sign in
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleSignOut =()=>{
        setUser(null)
    }
    return (
        <div>
            {!user ? <>
                <button className="mr-6" onClick={handleGoogleSignIn}>Google</button> 
                <button onClick={handleGithubSignIn}>Github</button>
            </> : <button onClick={handleSignOut}>Sign out</button>}
            
            
            { <div>
                    <h2>{user?.displayName}</h2>
                    <h2>{user?.email}</h2>
                    <img src={user?.photoURL
                    }></img>
                </div>
            }
        </div>
    );
};

export default Login;