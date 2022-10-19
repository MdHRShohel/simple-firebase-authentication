import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user,setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth,googleProvider)
    .then (result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.error('error: ',error);
    })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
    .then( () => {
      setUser({});
    })
    .catch( () => {
      setUser({});
    })
  }


  const handleGithubSignIn = () => {
    signInWithPopup(auth,githubProvider)
    .then (result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.error('error: ',error);
    })
  }



  return (
    <div className="App">
      {/* condition ? true : false */}

      { user.uid ?
        <button onClick={handleGoogleSignOut}>Sign Out</button>
        :
      <>
      <button onClick={handleGoogleSignIn}>Google Sign IN</button>
      <button onClick={handleGithubSignIn}>Github Sign IN</button>
      </>
    }
      <br/>
    {user.uid && <div>
      <h3>User Name: {user.displayName}</h3>
      <p>Email Address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>}
    </div>
  );
}

export default App;
