// NOXNECTAR Firebase web app configuration (public client identifiers)
export const firebaseConfig = {
  apiKey: "AIzaSyDJkKZzhCKstab79-Z-gQoF8qGWRYqbdjw",
  authDomain: "noxnectar-15843.firebaseapp.com",
  projectId: "noxnectar-15843",
  storageBucket: "noxnectar-15843.firebasestorage.app",
  messagingSenderId: "871145472013",
  appId: "1:871145472013:web:c753cc4751b880d1e2d544"
};
export const isConfigured = () => Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
