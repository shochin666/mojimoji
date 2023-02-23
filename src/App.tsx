import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Top } from "./components/Top";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyDfP_MaILbm25ABT4-6dkuKdQ2r5r6NwCI",
  authDomain: "mojimoji-f7149.firebaseapp.com",
  projectId: "mojimoji-f7149",
  storageBucket: "mojimoji-f7149.appspot.com",
  messagingSenderId: "1084590490023",
  appId: "1:1084590490023:web:77ce44716ee4328ec3f682",
  measurementId: "G-ST8C4B1KED",
};

function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
