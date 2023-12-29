import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";


const logOut = async () => {
    
    try {
      await signOut(auth);
      console.log('Déconnexion réussie');
      // Gérer l'état de l'application après la déconnexion ici, si nécessaire
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
      // Gérer l'erreur ici, si nécessaire
    }
  };
  
export default logOut