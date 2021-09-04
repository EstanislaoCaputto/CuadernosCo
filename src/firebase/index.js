// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr5EDYG5M_RTvoeh7HKYNiWDIm9NBV2_4",
  authDomain: "cuadernosco.firebaseapp.com",
  projectId: "cuadernosco",
  storageBucket: "cuadernosco.appspot.com",
  messagingSenderId: "67573170438",
  appId: "1:67573170438:web:b46e3c627af63f9e6e9e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);


// Esto va en el App.js
/*
const [cuadernos, setCuadernos] = useState([]);
  useEffect(()=> {
    const getCuadernos = async () =>{
      const cuadCategoria = collection(getData(), 'cuadernos');
      const cuadSnapshot = await getDocs(cuadCategoria);
      const cuadList = cuadSnapshot.docs.map(doc=>doc.data());
      console.log(cuadList);
      setCuadernos(cuadList)
    };
    
    getCuadernos();
  },[]);
*/