/*
-----------------------------------
---INITIAL SETUP FOR THE STEPS-----
-----------------------------------
1. visit: console.firebase.google.com
2. create a new firebase project 
3. visit doc (go to docs): Build > Authentication > Web > Getting Started 
4. Register web app > firebase project home > click web > give the name and Register 
5. Install Firebase for our project: npm install firebase 
6. Danger: Do not put firebase configuration in your project 
7. export firebase app from firebase.init.js
-----------------------------------
------Setup the auth provider------
-----------------------------------
8. create auth using getAuth from firebase by using app from firebase.init.js
9. create a google auth provider 
10. go to firebase > build > authentication > sign in method 
11. enable google sign in method with gmail
12. Create a button for google sign in method with a click handler 
13. inside the click handler, call signInWithPopup(auth,provider)
14. get the user from result.user 
*/