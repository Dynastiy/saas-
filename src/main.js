import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import firebase from 'firebase/app';

import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/css/main.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp756nk0Fy7y9QQpzZGE8frhWzqIM01N0",
  authDomain: "new-app-3c198.firebaseapp.com",
  databaseURL: "https://new-app-3c198-default-rtdb.firebaseio.com",
  projectId: "new-app-3c198",
  storageBucket: "new-app-3c198.appspot.com",
  messagingSenderId: "491258156977",
  appId: "1:491258156977:web:94b41bc4d510bc5b6fcf90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  app,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
